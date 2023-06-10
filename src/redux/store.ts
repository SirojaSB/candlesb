import { configureStore } from '@reduxjs/toolkit'
import candleSlice from "./slices/candle/slice";
import {useDispatch} from "react-redux";
import cartSlice from "./slices/cart/slice";
import ordersSlice from "./slices/orders/slice";

export const store = configureStore({
    reducer: {
        candles: candleSlice,
        cart: cartSlice,
        orders: ordersSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
