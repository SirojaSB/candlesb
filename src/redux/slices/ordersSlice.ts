import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type OrderItem = {
    [key: string]: string
}

const initialState: { orders: OrderItem[] } = {
    orders: [],
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        createOrderItem(state, action: PayloadAction<OrderItem>) {
            state.orders.push({...action.payload})
        },
    }

})

export const {createOrderItem} = ordersSlice.actions

export default ordersSlice.reducer
