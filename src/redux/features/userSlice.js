import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  historys: [],
  role: null,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("setUser", action.payload)
      state.user = action.payload.TwitterID
      state.role = action.payload.Role
    },
    setUserHistorys: (state, action) => {
      console.log("setUserHistorys", action.payload)
      state.historys = action.payload
    }
  },
})

export default userSlice.reducer

export const { setUser, setUserHistorys } = userSlice.actions