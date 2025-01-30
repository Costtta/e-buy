import { configureStore } from "@reduxjs/toolkit";
import menSlice from './MenSlice'

export const store = configureStore({
    reducer: {
        men: menSlice
    }
})