import { configureStore } from "@reduxjs/toolkit"
import productsSlice from './slices/ProductsSlice/ProductsSlice'
import filterSlice from "./slices/FilterSlice/FilterSlice"


export const store = configureStore({
    reducer: {
        allProducts: productsSlice,
        filter: filterSlice,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch