import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  historys: [],
  allHistorys: []
}

const historySlice = createSlice({
  name: 'historySlice',
  initialState,
  reducers: {
    addHistory: (state, action) => {
      let tmp = [...state.historys]
      tmp.push(action.payload)
      state.historys = tmp;
    },
    setHistorys: (state, action) => {
      state.historys = action.payload;
    },
    setAllHistorys: (state, action) => {
      state.allHistorys = action.payload;
    },
  },
})

export default historySlice.reducer

export const { addHistory, setHistorys, setAllHistorys } = historySlice.actions