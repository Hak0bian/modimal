import { createSlice } from "@reduxjs/toolkit";
import { productsThunk } from "./productsThunk";
import type { IProductsType, IProductsStateType } from "../../../types/types";
import { colors } from "../../../utils/arrays";


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
            .addCase(productsThunk.fulfilled, (state, action) => {
                state.products = action.payload.map((product: IProductsType) => {

                    const randomColors = new Set<string>();
                    while (randomColors.size < 3) {
                        randomColors.add(colors[Math.floor(Math.random() * colors.length)].color);
                    }

                    return {
                        ...product,
                        colors: [...randomColors]
                    };
                });
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