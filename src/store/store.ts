import { configureStore } from "@reduxjs/toolkit"
import productsSlice from './slices/ProductsSlice/ProductsSlice'

export const store = configureStore({
    reducer: {
        allProducts: productsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch