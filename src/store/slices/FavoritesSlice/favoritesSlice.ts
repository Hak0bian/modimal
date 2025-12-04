import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


const saved = localStorage.getItem('favorites');
const initialState: {items: number[]} = {
    items: saved ? JSON.parse(saved) : []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
reducers: {
        toggleFavorite: (state, action: PayloadAction<number>) => {
            const id = action.payload;

            if (state.items.includes(id)) {
                state.items = state.items.filter(item => item !== id);
            } else {
                state.items.push(id);
            }
            localStorage.setItem("favorites", JSON.stringify(state.items));
        },
    }
});


export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;