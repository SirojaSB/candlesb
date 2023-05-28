import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CartItem = {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    count: number,
    totalPrice: number
}

interface CandleSliceState {
    cartStore: CartItem[],
}

const initialState: CandleSliceState = {
    cartStore: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        createCartItem(state, action: PayloadAction<CartItem>) {
            const foundItem = state.cartStore.find((item) => item.id === action.payload.id)

            if (foundItem) {
                foundItem.count += action.payload.count
                foundItem.totalPrice += action.payload.totalPrice
            } else {
                state.cartStore.push({...action.payload})
            }
        }
    },
})

export const {createCartItem} = cartSlice.actions

export default cartSlice.reducer
