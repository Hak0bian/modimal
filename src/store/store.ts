import { configureStore } from "@reduxjs/toolkit"
import productsSlice from './slices/ProductsSlice/productsSlice'
import filterSlice from "./slices/FilterSlice/filterSlice"
import favoritesSlice from "./slices/FavoritesSlice/favoritesSlice"

export const store = configureStore({
    reducer: {
        allProducts: productsSlice,
        filter: filterSlice,
        favorites: favoritesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch