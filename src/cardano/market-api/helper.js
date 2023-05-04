import { Blockfrost, Lucid, C as LCore } from 'lucid-cardano';

import * as BIP39 from "bip39";

import buffer from 'buffer';

const _Buffer = buffer.Buffer;

export const blockFrost = new Blockfrost(
  process.env.REACT_APP_BLOCKFROST_API_URL,
  process.env.REACT_APP_BLOCKFROST_API_KEY,
)

export const lucid = await Lucid.new(
  blockFrost,
  process.env.REACT_APP_CADANO_NETWORK == 0 ? 'Testnet' : 'Mainnet'
)

export const lucid_user = await Lucid.new(
  blockFrost,
  process.env.REACT_APP_CADANO_NETWORK == 0 ? 'Testnet' : 'Mainnet'
)

export const waitForTransaction = async (label, txHash) => {
  console.log(`Waiting for ${label} transaction to complete...`)
  console.log('txHash:', txHash)

  await blockFrost.awaitTx(txHash)

  console.log(`${label} transaction Completed!`)
}

export const createMintingPolicy = async () => {
  const wallet = lucid.wallet
  console.log(wallet);
  console.log(wallet.address());

  const { paymentCredential } = lucid.utils.getAddressDetails(
    await wallet.address(),
  )

    console.log("paymentCredential", paymentCredential);

  const script = lucid.utils.nativeScriptFromJson({
    type: 'all',
    scripts: [
      { type: 'sig', keyHash: paymentCredential.hash },
      {
        type: 'before',
        slot: lucid.utils.unixTimeToSlot(Date.now() + 46656000000),
      },
    ],
  })

  console.log("policyscript===========>", script);

  const policyId = lucid.utils.mintingPolicyToId(script)

  return {
    policyScript: script,
    policyId: policyId,
  }
}

export const getCurrentAccount = (mnemonic = process.env.REACT_APP_MNEMONIC || "Something went wrong") => {

  const entropy = BIP39.mnemonicToEntropy(mnemonic);
  const rootKey = LCore.Bip32PrivateKey.from_bip39_entropy(
    Buffer.from(entropy, "hex"),
    Buffer.from(""),
  );

  const harden = (num) => { return 0x80000000 + num; }

  const accountKey = rootKey.derive(harden(1852)).derive(harden(1815)).derive(harden(0));
  const paymentKey = accountKey.derive(0).derive(0).to_raw_key();
  const stakeKey = accountKey.derive(2).derive(0).to_raw_key();

  const publicKey = Buffer.from(accountKey.to_public().as_bytes()).toString("hex"); // BIP32 Public Key
  const paymentKeyPub = paymentKey.to_public();
  const stakeKeyPub = stakeKey.to_public();

  const paymentKeyHash = Buffer.from(paymentKeyPub.hash().to_bytes(), "hex").toString("hex");
  const stakeKeyHash = Buffer.from(stakeKeyPub.hash().to_bytes(), "hex").toString("hex");

  // Base address with Staking Key
  const paymentAddr = LCore.BaseAddress.new(
    process.env.REACT_APP_CARDANO_NETWORK_ID == 0 ? LCore.NetworkInfo.testnet().network_id() : LCore.NetworkInfo.mainnet().network_id(),
    LCore.StakeCredential.from_keyhash(paymentKeyPub.hash()),
    LCore.StakeCredential.from_keyhash(stakeKeyPub.hash()),
  ).to_address().to_bech32();

  // Enterprise address without staking ability, for use by exchanges/etc
  const enterpriseAddr = LCore.EnterpriseAddress.new(
    process.env.REACT_APP_CARDANO_NETWORK_ID == 0 ? LCore.NetworkInfo.testnet().network_id() : LCore.NetworkInfo.mainnet().network_id(),
    LCore.StakeCredential.from_keyhash(paymentKeyPub.hash()),
  ).to_address().to_bech32();

  return {
    rootKey: rootKey,
    accountKey: accountKey,
    paymentKey: paymentKey,
    paymentKeyPub: paymentKeyPub,
    paymentKeyHash: paymentKeyHash,
    stakeKey: stakeKey,
    paymentAddr: paymentAddr,
    enterpriseAddr: enterpriseAddr,
  };
};