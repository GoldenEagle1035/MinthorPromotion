import ErrorTypes from "./error.types";
import { apiKey, cardanoUrl } from "../../config";
import { fromHex, toString } from "../../utils/converter";

import { C as LCore } from 'lucid-cardano';

/**
 * @param {string} asset - asset is a Concatenation of the policy_id and hex-encoded asset_name.
 * @throws COULD_NOT_FETCH_ASSET_DETAILS
 */
export const getAssetDetails = async (asset) => {
  try {
    const response = await cardano(`assets/${asset}`);

    if (parseInt(response.quantity) === 1 && response.onchain_metadata) {
      const assetDetails = {
        asset: response.asset,
        policyId: response.policy_id,
        assetName: response.asset_name,
        readableAssetName: toString(fromHex(response.asset_name)),
        fingerprint: response.fingerprint,
        quantity: parseInt(response.quantity),
        initialMintTxHash: response.initial_mint_tx_hash,
        mintOrBurnCount: parseInt(response.mint_or_burn_count),
        onchainMetadata: renameObjectKey(
          response.onchain_metadata,
          "Name",
          "name"
        ),
        metadata: response.metadata,
      };
      return deleteObjectKey(assetDetails, "");
    }

    return undefined;
  } catch (error) {
    console.error(
      `Unexpected error in getAssetDetails. [Message: ${error.message}]`
    );
    throw new Error(ErrorTypes.COULD_NOT_FETCH_ASSET_DETAILS);
  }
};

/**
 * @throws COULD_NOT_FETCH_ASSET_TRANSACTIONS
 */
export const getAssetTransactions = async (
  asset,
  { page = 1, count = 100, order = "asc" }
) => {
  try {
    return await cardano(
      `assets/${asset}/transactions?page=${page}&count=${count}&order=${order}`
    );
  } catch (error) {
    console.error(
      `Unexpected error in getAssetTransactions. [Message: ${error.message}]`
    );
    throw new Error(ErrorTypes.COULD_NOT_FETCH_ASSET_TRANSACTIONS);
  }
};

/**
 * @param {string} address - address must be in bech_32 format.
 * @throws COULD_NOT_FETCH_ADDRESS_UTXOS
 */
export const getLockedUtxos = async (
  address,
  { page = 1, count = 100, order = "asc" }
) => {
  try {
    return await cardano(
      `addresses/${address}/utxos?page=${page}&count=${count}&order=${order}`
    );
  } catch (error) {
    console.error(
      `Unexpected error in getLockedUtxos. [Message: ${error.message}]`
    );
    throw new Error(ErrorTypes.COULD_NOT_FETCH_ADDRESS_UTXOS);
  }
};

/**
 * @param {string} address - address must be in bech_32 format.
 * @param {string} asset - asset is a Concatenation of the policy_id and hex-encoded asset_name.
 * @throws COULD_NOT_FETCH_ASSET_UTXOS
 */
export const getLockedUtxosByAsset = async (address, asset) => {
  try {
    return await cardano(`addresses/${address}/utxos/${asset}`);
  } catch (error) {
    console.error(
      `Unexpected error in getLockedUtxosByAsset. [Message: ${error.message}]`
    );
    throw new Error(ErrorTypes.COULD_NOT_FETCH_ASSET_UTXOS);
  }
};

/**
 * @throws COULD_NOT_FETCH_MINTED_ASSETS
 */
export const getMintedAssets = async (
  policyId,
  { page = 1, count = 100, order = "asc" }
) => {
  try {
    const response = await cardano(
      `assets/policy/${policyId}?page=${page}&count=${count}&order=${order}`
    );

    return response
      .filter((asset) => parseInt(asset.quantity) === 1)
      .map((asset) => asset.asset);
  } catch (error) {
    console.error(
      `Unexpected error in getMintedAssets. [Message: ${error.message}]`
    );
    throw new Error(ErrorTypes.COULD_NOT_FETCH_MINTED_ASSETS);
  }
};

/**
 * @throws COULD_NOT_FETCH_TRANSACTION_METADATA
 */
export const getTxMetadata = async (hash) => {
  try {
    return await cardano(`txs/${hash}/metadata`);
  } catch (error) {
    console.error(
      `Unexpected error in getTxMetadata. [Message: ${error.message}]`
    );
    throw new Error(ErrorTypes.COULD_NOT_FETCH_TRANSACTION_METADATA);
  }
};

/**
 * @throws COULD_NOT_FETCH_TRANSACTION_UTXOS
 */
export const getTxUtxos = async (hash) => {
  try {
    const response = await cardano(`txs/${hash}/utxos`);

    return {
      hash: response.hash,
      inputs: response.inputs,
      outputs: response.outputs,
    };
  } catch (error) {
    console.error(
      `Unexpected error in getTxUtxos. [Message: ${error.message}]`
    );
    throw new Error(ErrorTypes.COULD_NOT_FETCH_TRANSACTION_UTXOS);
  }
};

/**
 * @throws COULD_NOT_FETCH_PROTOCOL_PARAMETERS
 */
export const getProtocolParameters = async () => {
  try {
    const response = await cardano(`epochs/latest/parameters`);
    const block_response = await cardano(`blocks/latest`);
    // return {
    //   linearFee: {
    //     minFeeA: response.min_fee_a.toString(), // "2000",
    //     minFeeB: response.min_fee_b.toString(),
    //   },
    //   minUtxo: "1000000",
    //   poolDeposit: response.pool_deposit,
    //   keyDeposit: response.key_deposit,
    //   maxValSize: parseInt(response.max_val_size),
    //   maxTxSize: parseInt(response.max_tx_size),
    //   coinsPerUtxoWord: response.coins_per_utxo_word,
    //   priceMem: (parseFloat(response.price_mem) * 10000).toString(),
    //   priceStep: (parseFloat(response.price_step) * 10000000).toString(),
    // };

    var value = {
      linearFee: LCore.LinearFee.new(
        LCore.BigNum.from_str(response.min_fee_a.toString()),
        LCore.BigNum.from_str(response.min_fee_b.toString())
      ),
      minUtxo: LCore.BigNum.from_str(response.min_utxo),
      coinsPerUtxoWord: LCore.BigNum.from_str(response.coins_per_utxo_word),
      poolDeposit: LCore.BigNum.from_str(response.pool_deposit),
      keyDeposit: LCore.BigNum.from_str(response.key_deposit),
      maxValSize: response.max_val_size,
      maxTxSize: response.max_tx_size,
      slot: block_response.slot,
    };
    return value;
  } catch (error) {
    console.error(
      `Unexpected error in getProtocolParameters. [Message: ${error.message}]`
    );
    throw new Error(ErrorTypes.COULD_NOT_FETCH_PROTOCOL_PARAMETERS);
  }
};

export const txEvaluate = async(tx) => {
  const exUnitsResult = cardano(
    "utils/txs/evaluate",
    { "Content-Type": "application/cbor" },
    Buffer.from(tx.to_bytes()).toString("hex")
  );
  return exUnitsResult;
}

const cardano = async (endpoint, headers, body) => {
  return await request(cardanoUrl, endpoint, headers, body);
};

const request = async (base, endpoint, headers, body) => {
  return await fetch(base + endpoint, {
    headers: {
      project_id: apiKey,
      ...headers,
    },
    method: body ? "POST" : "GET",
    body,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

const renameObjectKey = (object, oldKey, newKey) => {
  let newObject = { ...object };
  if (oldKey in newObject) {
    newObject[newKey] = newObject[oldKey];
    delete newObject[oldKey];
  }
  return newObject;
};

const deleteObjectKey = (object, key) => {
  let newObject = {};
  if (object) {
    Object.keys(object).forEach((objectKey) => {
      if (typeof object[objectKey] === "object") {
        newObject = {
          ...newObject,
          [objectKey]: deleteObjectKey(object[objectKey], key),
        };
      } else if (objectKey !== key) {
        newObject = {
          ...newObject,
          [objectKey]: object[objectKey],
        };
      }
    });
  }
  return newObject;
};
