import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  project_historys: [],
  twitter_historys: [],
}

const historySlice = createSlice({
  name: 'historySlice',
  initialState,
  reducers: {
    setHistorys: (state, action) => {
      console.log("setHistorys", action.payload)
      state.project_historys = action.payload
    },
    setTwitterHistorys: (state, action) => {
      console.log("setTwitterHistorys", action.payload)
      state.twitter_historys = action.payload
    }
  },
})

export default historySlice.reducer

export const { setHistorys, setTwitterHistorys } = historySlice.actions