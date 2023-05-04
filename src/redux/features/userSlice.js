import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  users: []
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  },
})

export default userSlice.reducer

export const { setUser, setUsers } = userSlice.actions