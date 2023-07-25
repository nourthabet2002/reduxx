import { configureStore } from '@reduxjs/toolkit'
import Taskslice from './Slices/Taskslice'

export const store = configureStore({
  reducer: {
    taskslice:Taskslice
  },
})