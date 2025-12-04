import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SelectedOption {
    key: string;
    value: string;
}
interface IFiltersArrayType {
    selectedOptions: SelectedOption[];
}

const initialState: IFiltersArrayType = {
    selectedOptions: []
};

const filterSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        toggleOption(state, action: PayloadAction<SelectedOption>) {
            const option = action.payload;

            const existsIndex = state.selectedOptions.findIndex(
                item => item.key === option.key && item.value === option.value
            );

            if (existsIndex > -1) {
                state.selectedOptions.splice(existsIndex, 1);
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