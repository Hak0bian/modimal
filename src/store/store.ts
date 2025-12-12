import { configureStore } from "@reduxjs/toolkit"
import productsSlice from './slices/ProductsSlice/productsSlice'
import filterSlice from "./slices/FilterSlice/filterSlice"
import favoritesSlice from "./slices/FavoritesSlice/favoritesSlice"
import CartSlice from "./slices/CartSlice/CartSlice"

export const store = configureStore({
    reducer: {
        allProducts: productsSlice,
        filter: filterSlice,
        favorites: favoritesSlice,
        cart: CartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch