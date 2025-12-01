import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IFiltersArrayType {
    selectedOptions: string[]
}

const initialState: IFiltersArrayType = {
    selectedOptions: []
}

const filterSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        toggleOption(state, action: PayloadAction<string>) {
            const option = action.payload;
            if (state.selectedOptions.includes(option)) {
                state.selectedOptions = state.selectedOptions.filter(item => item !== option);
            } else {
                state.selectedOptions.push(option);
            }
        },
        clearFilters(state) {
            state.selectedOptions = [];
        }
    }
});

export default filterSlice.reducer;
export const { toggleOption, clearFilters } = filterSlice.actions;