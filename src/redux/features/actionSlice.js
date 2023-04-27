import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  actions: [],
}

const actionSlice = createSlice({
  name: 'actionSlice',
  initialState,
  reducers: {
    setActions: (state, action) => {
      console.log("setActions", action.payload)
      state.actions = action.payload
    }
  },
})

export default actionSlice.reducer

export const { setActions } = actionSlice.actions