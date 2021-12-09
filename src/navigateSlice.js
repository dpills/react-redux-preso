import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeSection: '',
}

const navigateSlice = createSlice({
  name: 'navigate',
  initialState,
  reducers: {
    sectionActivate(state, action) {
      return { ...state, activeSection: action.payload }
    },
  },
})

export const { sectionActivate } = navigateSlice.actions
export default navigateSlice.reducer
