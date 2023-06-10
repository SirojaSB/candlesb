import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, CartSliceState} from "./types";

const initialState: CartSliceState = {
    cartStore: [],
    subTotalPrice: 0,
}

const slice = createSlice({
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

            state.subTotalPrice += action.payload.totalPrice
        },
        increaseCountOfItem(state, action: PayloadAction<number>) {
            const foundItem = state.cartStore.find((item) => item.id === action.payload)

            if (foundItem) {
                foundItem.count++
                foundItem.totalPrice += foundItem.price
                state.subTotalPrice += foundItem.price
            }
        },
        decreaseCountOfItem(state, action: PayloadAction<number>) {
            const foundItem = state.cartStore.find((item) => item.id === action.payload)

            if (foundItem && foundItem.count !== 1) {
                foundItem.count--
                foundItem.totalPrice -= foundItem.price
                state.subTotalPrice -= foundItem.price
            } else {
                state.cartStore = state.cartStore.filter(item => item.id !== action.payload)

                state.subTotalPrice = state.cartStore.reduce((sum, item) => sum += item.price * item.count, 0)
            }
        },
        removeCartItem(state, action: PayloadAction<number>) {
            const foundItem = state.cartStore.find((item) => item.id === action.payload)

            if (foundItem) {
                state.subTotalPrice -= foundItem.totalPrice

                state.cartStore = state.cartStore.filter(item => item.id !== action.payload)
            }
        },

        clearCart(state) {
            state.cartStore = []
            state.subTotalPrice = 0
        },
    },
})

export const {createCartItem, increaseCountOfItem, decreaseCountOfItem, removeCartItem, clearCart} = slice.actions

export default slice.reducer
