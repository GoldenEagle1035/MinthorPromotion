import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
}

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      console.log("setProjects", action.payload)
      state.projects = action.payload
    }
  },
})

export default projectSlice.reducer

export const { setProjects } = projectSlice.actions