import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CartItem = {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    count: number
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
        setSelectedPizza(state, action: PayloadAction<CartItem>) {

        }
    },
})

export const {setSelectedPizza} = cartSlice.actions

export default cartSlice.reducer
