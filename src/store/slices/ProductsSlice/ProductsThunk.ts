import { createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../../../api/api"

export const productsThunk = createAsyncThunk (
    "productsThunk",
    async (_, {rejectWithValue}) => {
        try {
            const res = await API.getProducts()
            return res.data.data
        }
        catch (err: any) {
            return(rejectWithValue(err || "Failed to fetch products"))
        }
    }
)