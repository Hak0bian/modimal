import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ICartItemType {
    id: number;
    size: string;
    color: string
}

interface ICartStateType {
    cartItems: ICartItemType[];
}

const saved = localStorage.getItem('CartItems');
const initialState: ICartStateType = {
    cartItems: saved ? JSON.parse(saved) : []
};

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        toggleCartItems: (state, action: PayloadAction<ICartItemType>) => {
            const { id, size, color } = action.payload;

            const existsIndex = state.cartItems.findIndex(
                item => item.id === id && item.size === size && item.color === color
            );

            if (existsIndex > -1) {
                state.cartItems = state.cartItems.filter(
                    item => !(item.id === id && item.size === size && item.color === color)
                );
            } else {
                state.cartItems.push({ id, size, color });
            }

            localStorage.setItem('CartItems', JSON.stringify(state.cartItems));
        },
    },
});

export const { toggleCartItems } = CartSlice.actions;
export default CartSlice.reducer;