import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ICartItemType {
    id: number;
    size: string;
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
            const { id, size } = action.payload;

            const existsIndex = state.cartItems.findIndex(
                item => item.id === id && item.size === size
            );

            if (existsIndex > -1) {
                state.cartItems = state.cartItems.filter(
                    item => !(item.id === id && item.size === size)
                );
            } else {
                state.cartItems.push({ id, size });
            }

            localStorage.setItem('CartItems', JSON.stringify(state.cartItems));
        },
    },
});

export const { toggleCartItems } = CartSlice.actions;
export default CartSlice.reducer;
