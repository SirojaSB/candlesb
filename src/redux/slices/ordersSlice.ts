import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type OrderInfo = {
    contacts: string,
    name: string,
    surname: string,
    address: string,
    city: string,
    index: string,
    country: string,
}

type OrderItem = {
    id: number
} & OrderInfo

interface OrderSliceState {
    orders: OrderItem[],
    currentOrderId: number,
    ordersPaid: OrderItem[]
}

const initialState: OrderSliceState = {
    orders: [],
    currentOrderId: 0,
    ordersPaid: []
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        createOrderItem(state, action: PayloadAction<OrderInfo>) {
            state.currentOrderId = state.ordersPaid.length + 1
            const id = state.currentOrderId

            state.orders.push({id, ...action.payload})
        },
    }
})

export const {createOrderItem} = ordersSlice.actions

export default ordersSlice.reducer
