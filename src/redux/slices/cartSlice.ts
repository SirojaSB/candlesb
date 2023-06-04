import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CartItem = {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    count: number,
    totalPrice: number
}

interface CartSliceState {
    cartStore: CartItem[],
    subTotalPrice: number,
}

const initialState: CartSliceState = {
    cartStore: [],
    subTotalPrice: 0,
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
        }
    },
})

export const {createCartItem, increaseCountOfItem, decreaseCountOfItem, removeCartItem} = cartSlice.actions

export default cartSlice.reducer
