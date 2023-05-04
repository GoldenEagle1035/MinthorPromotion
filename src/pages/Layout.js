import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../redux/store";
import Wallet from "../cardano/wallet"

import { availableWallets, disconnectCardanoWallet, connectCardanoWallet } from "../redux/apis/walletApi";
import { useSetUserMutation } from "../redux/apis/userApi";

const cardanoWallets = {
  nami: {
    title: "Nami",
    image: "images/wallets/nami.png",
    url: "https://namiwallet.io",
  },
  eternl: {
    title: "Eternl",
    image: "images/wallets/eternl.png",
    url: "https://ccvault.io",
  },
  flint: {
    title: "Flint",
    image: "images/wallets/flint.png",
    url: "https://flint-wallet.com",
  },
  gerowallet: {
    title: "Gero",
    image: "images/wallets/gero.png",
    url: "https://gerowallet.io",
  },
  typhon: {
    title: "Typhon",
    image: "images/wallets/typhon.png",
    url: "https://typhonwallet.io"
  },
  begin: {
    title: "Begin",
    image: "images/wallets/begin.png",
    url: "https://begin.is",
  },
};

const Layout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showCardanoWallets, setShowCardanoWallets] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);

  const [setUser] = useSetUserMutation();

  const state_wallet = useAppSelector((state) => state.walletState);

  const hideWallets = () => {
    setShowCardanoWallets(false);
  };

  const onclick_connect_wallet = () => {
    console.log("onclick_connect_wallet_state_wallet:", state_wallet);
    if (!state_wallet.connected) {
      dispatch(availableWallets((res) => {
        console.log("onclick_connect_wallet_availableWallets:", res.wallets);
        setShowCardanoWallets(res.wallets);
      }));
    }
    else {
      if (state_wallet.connected) {
        dispatch(disconnectCardanoWallet(selectedWallet, (res) => {
          Wallet.restoreProvider();
        }));
      }
      navigate("/");
    }
  };

  const connect_CardanoWallet = (wallet_name) => {
    setShowCardanoWallets(false);
    dispatch(connectCardanoWallet(wallet_name, (res) => {
      if (res.success) {
        setSelectedWallet(wallet_name);

        let formdata = new FormData();
        formdata.append('address', res.data.address);
        formdata.append('claimed', '0');
        formdata.append('invited', '0');

        setUser(formdata);
      }
    }));
  };

  const ref = useRef();

  useEffect(() => {

    if (state_wallet.wallet != null)
      connect_CardanoWallet(state_wallet.wallet);
  }, []);

  return (
    <div className="relative">
      <Outlet />
      <nav>
        <div className="absolute top-0 left-0 w-full p-10 flex flex-row gap-10 justify-between text-white font-bold items-center">
          <div className="flex text-4xl hover:cursor-pointer" onClick={(e) => { navigate("/") }}>
            <img src="images/logo.png" alt="" className="h-[40px] object-contain" />
          </div>
          <div className="flex flex-row items-center">
            {state_wallet.connected ? <div className="text-basic hover:cursor-pointer px-5 py-2" onClick={() => { navigate("/my_page") }}>My Page</div> : <></>}
            <div className="text-basic rounded-xl border-2 border-white bg-gray-500 hover:bg-gray-300 hover:cursor-pointer px-5 py-2" onClick={() => onclick_connect_wallet()}>
              {!state_wallet.connected
                ? (state_wallet.loading ? "Connecting..." : "Connect Wallet")
                : state_wallet.address.slice(0, 5) + "..." +
                state_wallet.address.slice(state_wallet.address.length - 3)}
            </div>
          </div>
        </div>
      </nav>
      {
        showCardanoWallets ? (
          <div className="fixed backdrop-filter backdrop-blur-sm bg-backdrop flex items-center justify-center overflow-auto z-50 inset-0">
            <div
              className="relative bg-white dark:bg-blue-darkest rounded-xl shadow-xl px-4 py-10 max-w-xl w-11/12 md:w-full"
              ref={ref}
            >
              <div className="text-center mb-7">
                <h1 className="text-blue-dark dark:text-gray-lightest mb-10 font-bold text-3xl">
                  Select wallet
                </h1>
              </div>{" "}
              <button
                type="button"
                onClick={hideWallets}
                className="absolute text-2xl px-2.5 text-gray-dark top-3 right-3 hover:opacity-100 opacity-70"
              >
                <i className="fas fa-times" />
              </button>{" "}
              <div className="flex justify-start lg:justify-center gap-1 overflow-auto">
                {Object.keys(cardanoWallets).map((item) => (
                  <div key={item}>
                    {(showCardanoWallets.filter((w_name) => { return w_name == item })).length > 0 ?
                      <button
                        type="button"
                        onClick={() => connect_CardanoWallet(item)}
                        className="relative w-20 py-5 px-1 bg-gray-lightest dark:bg-blue-darker rounded-xl text-blue-dark dark:text-gray-regular bg-opacity-60 border-2 hover:bg-opacity-10 dark:hover:bg-blue-meta dark:hover:bg-opacity-20 hover:bg-blue-light hover:border-blue-light text-md font-semibold dark:border-blue-darkest"
                      >
                        <img
                          src={cardanoWallets[item].image}
                          alt={cardanoWallets[item].title}
                          className="w-10 h-10 p-2 mx-auto mb-2"
                        />
                        {cardanoWallets[item].title}
                        <div className="text-xs font-normal mt-1.5 text-blue-dark dark:text-blue-meta">
                          <i className="fas fa-link" />
                          enabled
                        </div>
                      </button> :
                      <a
                        href={cardanoWallets[item].url}
                      >
                        <button
                          type="button"
                          className="relative w-20 py-5 px-1 bg-gray-lightest dark:bg-blue-darker rounded-xl text-blue-dark dark:text-gray-regular bg-opacity-60 border-2 hover:bg-opacity-10 dark:hover:bg-blue-meta dark:hover:bg-opacity-20 hover:bg-blue-light hover:border-blue-light text-md font-semibold dark:border-blue-darkest"
                        >
                          <img
                            src={cardanoWallets[item].image}
                            alt={cardanoWallets[item].title}
                            className="w-10 h-10 p-2 mx-auto mb-2"
                          />
                          {cardanoWallets[item].title}
                          <div className="text-xs font-normal mt-1.5 text-blue-dark dark:text-blue-meta">
                            <i className="fas fa-link" />
                            install
                          </div>
                        </button>
                      </a>
                    }
                  </div>
                ))}

              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  )
};

export default Layout;