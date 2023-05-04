
import { utf8ToHex } from 'lucid-cardano';
import { mintedCollection, setMintingState, getAllCollections } from '../../store/collection/api';
import { uploadHistory, getAllHistorys } from '../../store/history/api';
import { waitForTransaction, lucid, lucid_user } from './helper';
import axios from 'axios';

export const sendAffiliate = async (lovelace) => {
  console.log("sendAffiliate,", lovelace);

  const user_addr = await lucid_user.wallet.address();

  let tx = await lucid.newTx()
    .payToAddress(user_addr, { lovelace: BigInt(lovelace) })
    .complete();

  const signedTx = await tx.sign().complete();
  const txHash = await signedTx.submit();
  
  return txHash;
}

export const sendAda = async (addr, price, mint_count) => {
  console.log("sendada,", addr, price, mint_count, await lucid.wallet.address());
  const m_addr = await lucid.wallet.address();


  let tx = lucid_user.newTx()

  if (mint_count * (Number(price) <= 20 ? (Number(price) - 1) * 1000000 : Number(price) * 950000) != 0) {
    const lovelaceAmount_recipient = BigInt(mint_count * (Number(price) <= 20 ? (Number(price) - 3) * 1000000 : Number(price) * 950000 - 2000000));
    console.log("lovelaceAmount_recipient:", lovelaceAmount_recipient)
    tx = tx.payToAddress(addr, { lovelace: lovelaceAmount_recipient })
  }

  if (mint_count * (Number(price) <= 20 ? 2000000 : Number(price) * 50000 + 1000000) != 0) {
    const lovelaceAmount_minthor = BigInt(mint_count * (Number(price) <= 20 ? 4000000 : Number(price) * 50000 + 3000000));
    console.log("lovelaceAmount_minthor:", lovelaceAmount_minthor)
    tx = tx.payToAddress(m_addr, { lovelace: lovelaceAmount_minthor })
  }

  tx = await tx.complete();

  const signedTx = await tx.sign().complete();
  const txHash = await signedTx.submit();
  return txHash;
}

export const sendIpfsFee = async (amt) => {
  try {
    console.log("sendIpfsFee,", await lucid_user.wallet.address(), await lucid.wallet.address());
    const m_addr = await lucid.wallet.address();
    const lovelaceAmount = BigInt(Number(Math.ceil(amt)) * 1000000);
    const tx = await lucid_user
      .newTx()
      .payToAddress(m_addr, { lovelace: lovelaceAmount })
      .complete();

    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();

    await waitForTransaction('send ipfs fee', txHash)
    return true;

  } catch (error) {
    return { error: error.info || error.toString() };
  }
}

export const mintRoyaltiesNFT = async (
  policy,
  royalty,
  recipientAddress
) => {
  const { policyId, policyScript } = policy;

  let recipientAddress_array = [];
  for (let i = 0; i < Math.floor(recipientAddress.length / 64) + 1; i++) {
    if (i == Math.round(recipientAddress.length / 64))
      recipientAddress_array.push(recipientAddress.slice(64 * i));
    else
      recipientAddress_array.push(recipientAddress.slice(64 * i, 64 * (i + 1)));
  }

  console.log(recipientAddress, recipientAddress_array);

  const tx = await lucid
    .newTx()
    .mintAssets({ [policyId]: 1n })
    .attachMetadata(777, { rate: `${royalty / 100}`, addr: recipientAddress_array })
    .validTo(Date.now() + 100000)
    .attachMintingPolicy(policyScript)
    .complete()

  console.log("royalty tx", tx)

  const signedTx = await tx.sign().complete()

  console.log("royalty signedTx", signedTx)

  console.log("royalty policy", policyId, policyScript)

  const txHash = await signedTx.submit()

  console.log("royalty txHash", txHash)

  return txHash;

}

export const burnRoyaltiesNFT = async (
  policy,
) => {
  const { policyId, policyScript } = policy

  const tx = await lucid
    .newTx()
    .mintAssets({ [policyId]: -1n })
    .validTo(Date.now() + 100000)
    .attachMintingPolicy(policyScript)
    .complete()

  console.log("burn tx", tx)

  const signedTx = await tx.sign().complete()

  console.log("burn signedTx", signedTx)

  console.log("burn policy", policyId, policyScript)

  const txHash = await signedTx.submit()

  console.log("burn txHash", txHash)

  return txHash
}

const isAvailableProgress = (received_tx) => async (dispatch) => {

  while (true) {
    let current_utxos = await lucid.wallet.getUtxos();
    console.log("isAvailableProgress_current_utxos:", current_utxos);
    let historys_res = await dispatch(getAllHistorys());
    console.log("isAvailableProgress_historys_res:", historys_res)
    if (!historys_res.success) return { error: historys_res.error.toString() };

    let pending_historys = [];
    pending_historys = historys_res.historys.filter((item) => {
      return item.TxHash != ""
    })

    console.log("isAvailableProgress_pending_historys:", pending_historys)

    const available_utxos = current_utxos.filter((utxo) => {
      let is_available = false;
      // pending_historys.map((history) => {
      //   if (utxo.txHash == history.TxHash) is_available = false;
      // })
      if (utxo.txHash == received_tx) is_available = true;
      return is_available;
    })

    if (available_utxos.length != 0)
      return available_utxos;
  }
}

export const multiMintNFT = (
  collection,
  mint_count
) => async (dispatch) => {

  console.log("multiMintNFT", collection, mint_count);

  let pre_mint_info = [];
  let history_id, tx_hash = "", signedTx, tx, status, formData, available_utxos;
  const user_address = await lucid_user.wallet.address()

  try {

    dispatch(setMintingState("Initializing"));

    const policyId = collection.PolicyId, policyScript = { type: "Native", script: collection.PolicyScript };

    console.log("policy:", policyId, policyScript);

    let collections_res = await dispatch(getAllCollections());

    let collections = collections_res.collections.filter((item) => {
      if (item.ID == collection.ID) return true;
      return false;
    })

    console.log(collections);

    let i;
    // let mint_info = collection.MintedInfo;
    let mint_info = collections[0].MintedInfo;
    const inputAssets = [];

    let remainAssets = [];
    for (i = 0; i < collection.Count; i++)
      if (mint_info[i] == 'A')
        remainAssets.push(i);

    // console.log("mint_info:", mint_info);

    let remainCount = remainAssets.length;
    // console.log("remainAssets:", remainAssets);
    let temp_minted = mint_info;

    let thumbnail_type = collection.ThumbnailType != "" ? collection.ThumbnailType : collection.AssetType;
    if (thumbnail_type == "svg") thumbnail_type = "svg+xml"

    let mime_type;
    let sub_mim_type = collection.AssetType;

    if (sub_mim_type == "png" || sub_mim_type == "jpeg" || sub_mim_type == "gif")
      mime_type = "image/" + sub_mim_type;
    else if (sub_mim_type == "svg")
      mime_type = "image/svg+xml";
    else if (sub_mim_type == "mp4" || sub_mim_type == "webm")
      mime_type = "video/" + sub_mim_type;
    else if (sub_mim_type == "wav" || sub_mim_type == "ogg")
      mime_type = "audio/" + sub_mim_type;
    else if (sub_mim_type == "mp3")
      mime_type = "audio/mpeg";
    else if (sub_mim_type == "glb" || sub_mim_type == "gltf")
      mime_type = "model/" + sub_mim_type + "-binary";

    for (i = 0; i < mint_count; i++) {
      let rand_num = Math.floor(Math.random() * remainCount);
      let mint_num = remainAssets[rand_num];

      pre_mint_info.push(mint_num);

      // console.log("mint_num:", mint_num);
      if (mint_num - 1 >= 0) temp_minted = mint_info.slice(0, mint_num) + 'C';
      else temp_minted = 'C';
      if (mint_num + 1 < mint_info.length) temp_minted += mint_info.slice(mint_num + 1);

      remainCount--;

      remainAssets.splice(rand_num, 1);
      // console.log("remainAssets:", remainAssets);
      mint_info = temp_minted;
    }

    formData = new FormData();
    formData.append('id', collection.ID);
    pre_mint_info.map((item) => {
      formData.append('minted_info', item);
    })
    // formData.append('minted_info', pre_mint_info);

    console.log("formData_pre_info_to_server", collection.ID, pre_mint_info);

    await dispatch(mintedCollection(formData));

    formData = new FormData();
    formData.append('tx_hash', '');
    formData.append('collection_name', collection.Name);
    formData.append('nft_count', mint_count);
    formData.append('nft_numbers', JSON.stringify(pre_mint_info));
    formData.append('address', user_address);
    formData.append('status', 'register');

    tx_hash = '';
    status = 'register';

    console.log("formData_register", collection.Name, mint_count, JSON.stringify(pre_mint_info), user_address, 'register');
    let register_res = await dispatch(uploadHistory(formData));
    if (!register_res.success) return { error: register_res.error.toString() };

    history_id = register_res.history.ID;

    for (i = 0; i < pre_mint_info.length; i++) {

      // console.log("collection_type:", collection.Type);
      if (collection.Type == "cid1" || collection.Type == "cid2") {

        let res;
        if (collection.Type == "cid1") {
          res = await axios.get(`https://cloudflare-ipfs.com/ipfs/${collection.CollectionIpfs}/${pre_mint_info[i] + 1}.json`, {
            headers: {
              'Accept': 'text/plain'
            }
          });
        } else if (collection.Type == "cid2") {
          res = await axios.get(`https://cloudflare-ipfs.com/ipfs/${collection.CollectionIpfs}/json/${pre_mint_info[i] + 1}.json`, {
            headers: {
              'Accept': 'text/plain'
            }
          });
        }

        // console.log("ipfs_res", res);

        let image_temp = res.data.image;
        if (image_temp && image_temp.match(/.ipfs.w3s.link/g)) {
          image_temp = image_temp.replace("https", "ipfs");
          image_temp = image_temp.replace(".ipfs.w3s.link", "");
        }
        // console.log("image_temp___", image_temp);

        let files_temp = res.data.file;
        for (const file_item in files_temp) {
          if (file_item && file_item.src.match(/.ipfs.w3s.link/g)) {
            file_item.src = file_item.src.replace("https", "ipfs");
            file_item.src = file_item.src.replace(".ipfs.w3s.link", "");
          }
        }

        let tmp_data = { ...res.data }

        if (res.data.name) tmp_data.name = res.data.name.length > 32 ? res.data.name.slice(0, 32) : res.data.name

        if (res.data.description) {
          let tmp_description_array = [];
          for (let i = 0; i < Math.floor(res.data.description.length / 64) + 1; i++) {
            if (i == Math.round(res.data.description.length / 64))
              tmp_description_array.push(res.data.description.slice(64 * i));
            else
              tmp_description_array.push(res.data.description.slice(64 * i, 64 * (i + 1)));
          }
          tmp_data.description = tmp_description_array
        }

        if (files_temp)
          tmp_data.files = files_temp

        if (image_temp) {
          let tmp_image_array = [];
          for (let i = 0; i < Math.floor(image_temp.length / 64) + 1; i++) {
            if (i == Math.round(image_temp.length / 64))
              tmp_image_array.push(image_temp.slice(64 * i));
            else
              tmp_image_array.push(image_temp.slice(64 * i, 64 * (i + 1)));
          }
          tmp_data.image = tmp_image_array
        }

        inputAssets.push(tmp_data);

      }
      else {
        // console.log("no ipfs");

        let assetNameArray = JSON.parse(collection.AssetNames);
        let thumbnailNameArray = JSON.parse(collection.ThumbnailNames);

        let tmp_description_array = [];
        for (let i = 0; i < Math.floor(collection.Description.length / 64) + 1; i++) {
          if (i == Math.round(collection.Description.length / 64))
            tmp_description_array.push(collection.Description.slice(64 * i));
          else
            tmp_description_array.push(collection.Description.slice(64 * i, 64 * (i + 1)));
        }

        inputAssets.push({
          name: `${collection.Name}_${pre_mint_info[i] + 1}`,
          description: tmp_description_array,
          files: [
            {
              mediaType: mime_type,
              name: `${collection.Name}_${pre_mint_info[i] + 1}`,
              src: [`ipfs://${collection.CollectionIpfs}`, `/${assetNameArray[pre_mint_info[i]]}`],
            }
          ],
          image: [`ipfs://${collection.CollectionIpfs}`, `/${collection.ThumbnailType != "" ? thumbnailNameArray[pre_mint_info[i]] : assetNameArray[pre_mint_info[i]]}`],
          mediaType: "image/" + thumbnail_type
        });
      }
    }

    // console.log("temp_minted:", temp_minted);

    // console.log("inputAssets", inputAssets);

    const metadata_assets = inputAssets
      .reduce((out, asset) => {
        return {
          ...out,
          [asset.name]: asset
        }
      }, {})

    console.log("metadata_assets", metadata_assets);

    const assets = Object.keys(metadata_assets).reduce(
      (out, name) => ({
        ...out,
        [policyId + utf8ToHex(name)]: 1n,
      }),
      {},
    )

    console.log("assets", assets)

    const metadata = {
      [policyId]: metadata_assets,
      version: '1.0',
    }

    console.log("metadata", metadata);

    dispatch(setMintingState("Communicating With Blockchain"));

    tx_hash = await sendAda(collection.RecipientAddr, collection.Price, mint_count);

    formData = new FormData();
    formData.append('id', history_id);
    formData.append('tx_hash', tx_hash);
    formData.append('collection_name', collection.Name);
    formData.append('nft_count', mint_count);
    formData.append('address', user_address);
    formData.append('status', 'send_ada');

    status = 'send_ada';

    console.log("formData_send_ada", history_id, tx_hash, collection.Name, mint_count, user_address, 'send_ada');
    let res = await dispatch(uploadHistory(formData));
    if (!res.success) return { error: res.error.toString() };

    await waitForTransaction('send ada', tx_hash)

    let received_tx = tx_hash;

    formData = new FormData();
    formData.append('id', history_id);
    formData.append('tx_hash', '');
    formData.append('collection_name', collection.Name);
    formData.append('nft_count', mint_count);
    formData.append('address', user_address);
    formData.append('status', 'send_ada');

    tx_hash = '';
    status = 'send_ada';

    console.log("formData_send_ada", history_id, collection.Name, mint_count, user_address, 'send_ada');
    res = await dispatch(uploadHistory(formData));
    if (!res.success) return { error: res.error.toString() };

    let current_utxos = await lucid.wallet.getUtxos();
    console.log("current_utxos:", current_utxos);

    dispatch(setMintingState("Pending"));

    available_utxos = await dispatch(isAvailableProgress(received_tx))

    console.log("available_utxos:", available_utxos)

    console.log("before mint assets:", assets)

    dispatch(setMintingState("Minting"));

    tx = await lucid
      .newTx()
      .mintAssets(assets)
      .attachMetadata(721, metadata)
      .validTo(Date.now() + 100000)
      .attachMintingPolicy(policyScript)
      .payToAddress(user_address, assets)
      .collectFrom(available_utxos)
      .complete({ coinSelection: false })

    signedTx = await tx.sign().complete()

    tx_hash = await signedTx.submit()

    formData = new FormData();
    formData.append('id', history_id);
    formData.append('tx_hash', tx_hash);
    formData.append('collection_name', collection.Name);
    formData.append('nft_count', mint_count);
    formData.append('address', user_address);
    formData.append('status', 'multi_mint');

    status = 'multi_mint';

    console.log("formData_multi_mint", history_id, tx_hash, collection.Name, mint_count, user_address, 'multi_mint');
    res = await dispatch(uploadHistory(formData));
    if (!res.success) return { error: error.toString() };

    await waitForTransaction('multi mint', tx_hash)

    received_tx = tx_hash;

    formData = new FormData();
    formData.append('id', history_id);
    formData.append('tx_hash', '');
    formData.append('collection_name', collection.Name);
    formData.append('nft_count', mint_count);
    formData.append('address', user_address);
    formData.append('status', 'multi_mint');

    tx_hash = '';
    status = 'multi_mint';

    console.log("formData_multi_mint", history_id, collection.Name, mint_count, user_address, 'multi_mint');
    res = await dispatch(uploadHistory(formData));
    if (!res.success) return { error: res.error.toString() };

    current_utxos = await lucid.wallet.getUtxos();
    console.log("current_utxos:", current_utxos);

    // dispatch(setMintingState("Sending to Wallet"));

    // available_utxos = await dispatch(isAvailableProgress(received_tx))

    // console.log("available_utxos:", available_utxos)

    // tx = await lucid
    //   .newTx()
    //   // .collectFrom(available_utxos)
    //   .payToAddress(user_address, assets)
    //   // .complete({coinSelection: false})
    //   .complete()

    // signedTx = await tx.sign().complete()

    // tx_hash = await signedTx.submit()

    // formData = new FormData();
    // formData.append('id', history_id);
    // formData.append('tx_hash', tx_hash);
    // formData.append('collection_name', collection.Name);
    // formData.append('nft_count', mint_count);
    // formData.append('address', user_address);
    // formData.append('status', 'send_nft');

    // status = 'send_nft';

    // console.log("formData_send_nft", history_id, tx_hash, collection.Name, mint_count, user_address, 'send_nft');
    // res = await dispatch(uploadHistory(formData));
    // if (!res.success) return { error: error.toString() };

    // await waitForTransaction('send nft', tx_hash)

    // formData = new FormData();
    // formData.append('id', history_id);
    // formData.append('tx_hash', '');
    // formData.append('collection_name', collection.Name);
    // formData.append('nft_count', mint_count);
    // formData.append('address', user_address);
    // formData.append('status', 'send_nft');

    // tx_hash = '';
    // status = 'send_nft';

    // console.log("formData_send_nft", history_id, collection.Name, mint_count, user_address, 'send_nft');
    // res = await dispatch(uploadHistory(formData));
    // if (!res.success) return { error: res.error.toString() };

    // current_utxos = await lucid.wallet.getUtxos();
    // console.log("current_utxos:", current_utxos);

    formData = new FormData();
    formData.append('id', collection.ID);
    pre_mint_info.map((item) => {
      formData.append('minted_info', item);
    })
    // formData.append('minted_info', pre_mint_info);

    console.log("formData_info_to_server", collection.ID, pre_mint_info);

    await dispatch(mintedCollection(formData));

    await dispatch(setMintingState(""));

    formData = new FormData();
    formData.append('id', history_id);
    formData.append('tx_hash', '');
    formData.append('collection_name', collection.Name);
    formData.append('nft_count', mint_count);
    formData.append('address', user_address);
    formData.append('status', 'complete');

    tx_hash = '';
    status = 'complete';

    console.log("formData_complete", history_id, collection.Name, mint_count, user_address, 'complete');
    res = await dispatch(uploadHistory(formData));
    if (!res.success) return { error: res.error.toString() };

    return true;

  } catch (error) {
    dispatch(setMintingState(""));
    console.error(error);

    formData = new FormData();
    formData.append('id', collection.ID);
    pre_mint_info.map((item) => {
      formData.append('minted_info', item);
    })
    // formData.append('minted_info', pre_mint_info);
    formData.append('cancel_flag', 'cancel');

    console.log("formData_cancel_info_to_server", collection.ID, pre_mint_info);

    await dispatch(mintedCollection(formData));

    formData = new FormData();
    formData.append('id', history_id);
    formData.append('tx_hash', tx_hash);
    formData.append('collection_name', collection.Name);
    formData.append('nft_count', mint_count);
    formData.append('address', user_address);
    formData.append('status', status + '_fail');

    let extra;
    if (error.info) extra = error.info;
    else extra = error.toString();

    if (extra.includes("InputsExhaustedError")) extra = "Insufficient Funds!";

    formData.append('extra', extra);

    status += '_fail';

    console.log("formData_fail", history_id, tx_hash, collection.Name, mint_count, user_address, status, extra);
    let res = await dispatch(uploadHistory(formData));
    if (!res.success) return { error: res.error.toString() };

    return { error: extra };
  }
}
