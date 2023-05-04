import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { lucid, lucid_user } from '../../cardano/market-api/helper'
import Wallet from '../../cardano/wallet'
import { setWalletLoading, walletCardanoConnected, walletCardanoDisconnected } from '../features/walletSlice';

const baseUrl = `${process.env.REACT_APP_MINTHOR_PROMO_API_URL}/api/`

export const availableWallets = (callback) => async (dispatch) => {
    console.log("availableWallets");

    callback({
        success: true,
        wallets: await Wallet.getAvailableWallets(),
        msg: "",
    });
};

export const disconnectCardanoWallet = (provider, callback) => async (dispatch) => {
    if (await Wallet.enable(provider)) {
        sessionStorage.removeItem("wallet");
        dispatch(walletCardanoDisconnected());
        callback({
            success: true,
        });
    }
    else {
        callback({
            success: false,
        });
    }
};

const initRewardWallet = () => {
    lucid.selectWalletFromSeed(process.env.REACT_APP_MNEMONIC);
}

export const connectCardanoWallet = (provider, callback) => async (dispatch) => {

    dispatch(setWalletLoading());

    initRewardWallet();

    try {
        let wallet_provider = await window.cardano[provider].enable();

        if (wallet_provider) {
            await lucid_user.selectWallet(wallet_provider)

            sessionStorage.setItem("wallet", provider);

            const connectedWallet = {
                wallet: provider,
                address: await lucid_user.wallet.address()
            };
            dispatch(walletCardanoConnected(connectedWallet));
            callback({
                success: true,
                data: connectedWallet,
            });
        } else {
            dispatch(setWalletLoading(false));
            callback({
                success: false,
                msg: "Please switch your Wallet's Network.",
            });
        }
    } catch (error) {

        console.log(error);
        dispatch(setWalletLoading(false));
        callback({
            success: false,
            msg: "",
        });
    }
};

export const walletApi = createApi({
    reducerPath: 'walletApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Wallet'],
    endpoints: (builder) => ({
    }),
});

export const {
} = walletApi;