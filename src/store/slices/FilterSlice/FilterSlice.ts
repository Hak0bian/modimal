import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SelectedOption {
    key: string;
    value: string;
}
interface IFiltersArrayType {
    selectedOptions: SelectedOption[];
    filterIsOpen: boolean
}

const initialState: IFiltersArrayType = {
    selectedOptions: [],
    filterIsOpen: false
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
        openCloseFilter(state, action: PayloadAction<boolean>) {
            state.filterIsOpen = action.payload
        },
        clearFilters(state) {
            state.selectedOptions = [];
        }
    }
});

export default filterSlice.reducer;
export const { toggleOption, openCloseFilter, clearFilters } = filterSlice.actions;