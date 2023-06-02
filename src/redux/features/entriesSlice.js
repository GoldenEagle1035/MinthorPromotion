import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entries: []
}

const entriesSlice = createSlice({
  name: 'entriesSlice',
  initialState,
  reducers: {
  },
})

export default entriesSlice.reducer

export const { } = entriesSlice.actions