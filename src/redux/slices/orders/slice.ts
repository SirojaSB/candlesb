import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrderInfo, OrderPayment, OrderSliceState} from "./types";
import {CartSliceState} from "../cart/types";

const getLocalStorage = () => {
    const orders = localStorage.getItem('Candlesb paid orders')

    return orders ? JSON.parse(orders) : []
}

const ordersData = getLocalStorage()

const initialState: OrderSliceState = {
    orders: [],
    ordersWithInfo: [],
    currentOrderId: 0,
    ordersPaid: ordersData,
}

const slice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        createOrderItem(state, action: PayloadAction<CartSliceState>) {
            state.currentOrderId = state.ordersPaid.length + 1
            const id = state.currentOrderId

            state.orders.push({id, productsInfo: action.payload})
        },
        addOrderItemInfo(state, action: PayloadAction<OrderInfo>) {
            const currentOrder = state.orders[state.orders.length - 1]
            state.ordersWithInfo.push({...currentOrder, ...action.payload})
        },
        createPaidOrderItem(state, action: PayloadAction<OrderPayment>) {
            const currentOrder = state.ordersWithInfo[state.ordersWithInfo.length - 1]
            state.ordersPaid.push({...currentOrder, payment: action.payload})
        }
    }
})

export const {createOrderItem, createPaidOrderItem, addOrderItemInfo} = slice.actions

export default slice.reducer
