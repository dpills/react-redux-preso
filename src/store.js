import { configureStore } from '@reduxjs/toolkit'
import navigateSlice from './navigateSlice'

export const store = configureStore({
  reducer: {
    navigate: navigateSlice,
  },
})
