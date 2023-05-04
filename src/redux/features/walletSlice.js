import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  connected: false,
  loading: false,
  wallet: sessionStorage.getItem("wallet"),
  address: ""
}

const walletSlice = createSlice({
  name: 'walletSlice',
  initialState,
  reducers: {
    walletCardanoConnected: (state, action) => {
      console.log("walletCardanoConnected:", action.payload);
      state.connected = true;
      state.loading = false;
      state.wallet = action.payload.wallet;
      state.address = action.payload.address;
    },
    walletCardanoDisconnected: (state) => {
      state.connected = false;
    },
    setWalletLoading: (state) => {
      state.loading = true;
    }
  },
})

export default walletSlice.reducer

export const { walletCardanoConnected, walletCardanoDisconnected, setWalletLoading } = walletSlice.actions