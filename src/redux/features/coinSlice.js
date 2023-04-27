import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coins: [],
}

const coinSlice = createSlice({
  name: 'coinSlice',
  initialState,
  reducers: {
    setCoins: (state, action) => {
      console.log("setCoins", action.payload)
      state.coins = action.payload
    }
  },
})

export default coinSlice.reducer

export const { setCoins } = coinSlice.actions