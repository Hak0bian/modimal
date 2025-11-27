import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { productsThunk } from "./ProductsThunk";
import type { IProductsType, IProductsStateType } from "../../../types/types";


const initialState: IProductsStateType = {
    products: [],
    loadingProducts: false,
    errorProducts: null
}

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(productsThunk.fulfilled, (state: any, action: PayloadAction<IProductsType[]>) => {
                state.products = action.payload
            })
            .addCase(productsThunk.pending, (state) => {
                state.loadingProducts = true;
                state.errorProducts = null;
            })
            .addCase(productsThunk.rejected, (state, action) => {
                state.loadingProducts = false;
                state.errorProducts = action.payload as string ?? null;
            });
    },
})

export default productsSlice.reducer