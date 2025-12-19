import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ICartItemType {
    id: number;
    size: string;
    color: string
}

interface ICartStateType {
    cartItems: ICartItemType[];
    totalAmount: number
    counts: Record<string, number>;
}

const saved = localStorage.getItem('CartItems');
const initialState: ICartStateType = {
    cartItems: saved ? JSON.parse(saved) : [],
    totalAmount: 0,
    counts: {},
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
        changeTotalAmount: (state, action: PayloadAction<number>) => {
            state.totalAmount = action.payload
        },
        setItemCount: (state, action: PayloadAction<{ key: string; count: number }>) => {
            state.counts[action.payload.key] = action.payload.count;
        },
        incrementItemCount: (state, action: PayloadAction<{ key: string; max?: number }>) => {
            const current = state.counts[action.payload.key] ?? 1;
            state.counts[action.payload.key] = Math.min(current + 1, action.payload.max ?? Infinity);
        },
        decrementItemCount: (state, action: PayloadAction<{ key: string }>) => {
            const current = state.counts[action.payload.key] ?? 1;
            state.counts[action.payload.key] = Math.max(current - 1, 1);
        }
    },
});

export const { toggleCartItems, changeTotalAmount, setItemCount, incrementItemCount, decrementItemCount } = CartSlice.actions;
export default CartSlice.reducer;