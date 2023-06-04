import { configureStore } from '@reduxjs/toolkit'
import candleSlice from "./slices/candleSlice";
import {useDispatch} from "react-redux";
import cartSlice from "./slices/cartSlice";
import ordersSlice from "./slices/ordersSlice";

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
