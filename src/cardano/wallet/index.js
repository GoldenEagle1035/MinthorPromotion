import { Blockfrost, Lucid, toHex } from 'lucid-cardano';
import { config } from '../../config/config';

// export const blockFrost = new Blockfrost(
//     config.BLOCKFROST_API_URL,
//     config.BLOCKFROST_API_KEY,
// )

// export const lucid = await Lucid.new(
//     blockFrost,
//     config.CARDANO_NETWORK == 0 ? config.PREVIEW_OR_PREPROD : 'Mainnet'
// )

// export const lucid_user = await Lucid.new(
//     blockFrost,
//     config.CARDANO_NETWORK == 0 ? config.PREVIEW_OR_PREPROD : 'Mainnet'
// )

// export const getAvailableWallets = async () => {

//     console.log("Wallet_getAvailableWallets");

//     let availableWallets = [];

//     if (window.cardano === undefined) {
//         return availableWallets;
//     }

//     if (window.cardano.nami) {
//         availableWallets.push("nami");
//     }

//     if (window.cardano.ccvault) {
//         availableWallets.push("ccvault");
//     }

//     if (window.cardano.gerowallet) {
//         availableWallets.push("gerowallet");
//     }

//     console.log("availableWallets", availableWallets);
//     return availableWallets;
// }

// export const sendAdaFromUser = async (addr, amt) => {
//     console.log("sendAdaFromUser,", addr, await lucid_user.wallet.address());
//     const amount = BigInt(Number(amt) * 1000000);
//     const tx = await lucid_user
//         .newTx()
//         .payToAddress(addr, { lovelace: amount })
//         .complete();

//     const signedTx = await tx.sign().complete();
//     const txHash = await signedTx.submit();
//     return txHash;
// }

// export const sendAdaFromProject = async (addr, amt) => {
//     console.log("sendAdaFromProject,", addr, await lucid.wallet.address());
//     const amount = BigInt(Number(amt) * 1000000);
//     const tx = await lucid
//         .newTx()
//         .payToAddress(addr, { lovelace: amount })
//         .complete();

//     const signedTx = await tx.sign().complete();
//     const txHash = await signedTx.submit();
//     return txHash;
// }

// export const sendToken = async (addr, policyId, assetName, amt) => {
//     console.log("sendToken,", addr, await lucid.wallet.address());
//     const assetNameHex = `${policyId}${toHex(new TextEncoder().encode(assetName))}`
//     const amount = BigInt(Number(amt));
//     const tx = await lucid
//         .newTx()
//         .payToAddress(addr, { [assetNameHex]: amount })
//         .complete();

//     const signedTx = await tx.sign().complete();
//     const txHash = await signedTx.submit();
//     return txHash;
// }

// export const sendTokenFromAdmin = async (addr, policyId, assetName, amt) => {
//     console.log("sendTokenFromAdmin,", await lucid_user.wallet.address(), addr);
//     const assetNameHex = `${policyId}${toHex(new TextEncoder().encode(assetName))}`
//     const amount = BigInt(Number(amt));
//     const tx = await lucid_user
//         .newTx()
//         .payToAddress(addr, { [assetNameHex]: amount })
//         .complete();

//     const signedTx = await tx.sign().complete();
//     const txHash = await signedTx.submit();
//     return txHash;
// }

// export const waitForTransaction = async (label, txHash) => {
//     console.log(`Waiting for ${label} transaction to complete...`)
//     console.log('txHash:', txHash)
  
//     await blockFrost.awaitTx(txHash)
  
//     console.log(`${label} transaction Completed!`)
//   }