import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InfoProducts, OrderInfo, OrderPayment, OrderSliceState} from "./types";

const initialState: OrderSliceState = {
    orders: [],
    ordersWithInfo: [],
    currentOrderId: 0,
    ordersPaid: [],
}

const slice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        createOrderItem(state, action: PayloadAction<InfoProducts>) {
            state.currentOrderId = state.ordersPaid.length + 1
            const id = state.currentOrderId

            state.orders.push({id, productsInfo: action.payload})
        },
        addOrderItemInfo(state, action: PayloadAction<OrderInfo>) {
            const currentOrder =  state.orders[state.orders.length - 1]
            state.ordersWithInfo.push({...currentOrder, ...action.payload})
        },
        createPaidOrderItem(state, action: PayloadAction<OrderPayment>) {
            const currentOrder =  state.ordersWithInfo[state.orders.length - 1]
            state.ordersPaid.push({...currentOrder, payment: action.payload})
        }
    }
})

export const {createOrderItem, createPaidOrderItem, addOrderItemInfo} = slice.actions

export default slice.reducer
