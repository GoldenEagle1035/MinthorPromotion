// import Cardano from "../serialization-lib";
import { C as LCore } from 'lucid-cardano';

import { fromHex } from "../../utils/converter";
import buffer from 'buffer';

const _Buffer = buffer.Buffer;

const originProvider = window.cardano;

class Wallet {

  async enable(name) {
    if (name === "nami") {
      const instance = await window.cardano?.nami?.enable();
      if (instance) {
        window.cardano = instance;
        return true;
      }
    } else if (name === "eternl") {
      const instance = await window.cardano?.eternl?.enable();
      if (instance) {
        window.cardano = instance;
        return true;
      }
    } else if (name === "flint") {
      const instance = await window.cardano?.flint?.enable();
      if (instance) {
        window.cardano = instance;
        return true;
      }
    } else if (name === "gerowallet") {
      const instance = await window.cardano?.gerowallet?.enable();
      if (instance) {
        window.cardano = instance;
        return true;
      }
    } else if (name === "typhon") {
      const instance = await window.cardano?.typhon?.enable();
      if (instance) {
        window.cardano = instance;
        return true;
      }
    } else if (name === "begin") {
      const instance = await window.cardano?.begin?.enable();
      if (instance) {
        window.cardano = instance;
        return true;
      }
    } else if (name === false) {
      const isEnabled = await window.cardano?.enable();
      if (isEnabled) {
        window.cardano = window.cardano;
        return true;
      }
    }
    return false;
  }

  restoreProvider() {
    console.log(window.cardano);
    window.cardano = originProvider;
    console.log(window.cardano);
  }

  async getAvailableWallets() {

    let availableWallets = [];

    if (window.cardano === undefined) {
      return availableWallets;
    }

    if (window.cardano.nami) {
      availableWallets.push("nami");
    }

    if (window.cardano.eternl) {
      availableWallets.push("eternl");
    }

    if (window.cardano.flint) {
      availableWallets.push("flint");
    }
    
    if (window.cardano.gerowallet) {
      availableWallets.push("gerowallet");
    }

    if (window.cardano.typhone) {
      availableWallets.push("typhon");
    }

    if (window.cardano.begin) {
      availableWallets.push("begin");
    }

    console.log("availableWallets", availableWallets);
    return availableWallets;
  }

  async getBalance() {
    return await window.cardano.getBalance();
  }

  async getAddress() {
    return await window.cardano.getAddress();
  }

  async getCollateral() {
    return await window.cardano.experimental.getCollateral();
  }

  async getNetworkId() {
    return await window.cardano.getNetworkId();
  }

  async getUsedAddresses() {
    return await window.cardano.getUsedAddresses();
    // const usedAddresses = await window.cardano.getUsedAddresses();

    // return usedAddresses.map((address) =>
    //   LCore.Address.from_bytes(fromHex(address)).to_bech32()
    // );

  }

  async getChangeAddress() {
    return await window.cardano.getChangeAddress();
  }

  async getUtxos() {
    return await window.cardano.getUtxos();
  }

  async createLockingPolicyScript(protocolParameters) {
    const slot = parseInt(protocolParameters.slot);
    const ttl = slot + 1000;
    const address = _Buffer.from(
      (await window.cardano.getUsedAddresses())[0],
      "hex"
    );
    const paymentKeyHash = LCore.BaseAddress.from_address(
      LCore.Address.from_bytes(address)
    )
      .payment_cred()
      .to_keyhash();
    const nativeScripts = LCore.NativeScripts.new();
    const script = LCore.ScriptPubkey.new(paymentKeyHash);
    const nativeScript = LCore.NativeScript.new_script_pubkey(script);
    const lockScript = LCore.NativeScript.new_timelock_expiry(
      LCore.TimelockExpiry.new(ttl)
    );
    nativeScripts.add(nativeScript);
    nativeScripts.add(lockScript);
    const finalScript = LCore.NativeScript.new_script_all(
      LCore.ScriptAll.new(nativeScripts)
    );
    const policyId = _Buffer.from(
      LCore.ScriptHash.from_bytes(
        finalScript.hash().to_bytes()
      ).to_bytes(),
      "hex"
    ).toString("hex");
    return { id: policyId, script: finalScript, ttl };
  }

  async signTx(tx, partialSign = true) {
    return await window.cardano.signTx(tx, partialSign);
  }

  async submitTx(tx) {
    return await window.cardano.submitTx(tx);
  }
}

export default new Wallet();
