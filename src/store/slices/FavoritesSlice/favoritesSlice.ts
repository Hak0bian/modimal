import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const saved = localStorage.getItem('Favorites');
const initialState: { FavItems: number[] } = {
    FavItems: saved ? JSON.parse(saved) : []
};

export const favoritesSlice = createSlice({
    name: 'favoritesSlice',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<number>) => {
            const id = action.payload;

            if (state.FavItems.includes(id)) {
                state.FavItems = state.FavItems.filter(item => item !== id);
            } else {
                state.FavItems.push(id);
            }
            localStorage.setItem("Favorites", JSON.stringify(state.FavItems));
        },
    }
});


export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;