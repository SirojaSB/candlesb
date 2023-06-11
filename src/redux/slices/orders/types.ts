import {CartSliceState} from "../cart/types";

export type OrderPayment = {
    paymentMethod: 'card' | 'upon receiving',
    cardInfo?: {
        cardNumber: string,
        nameSur: string,
        date: string,
        cvv: string
    }
}

export type OrderInfo = {
    contacts: string,
    name: string,
    surname: string,
    address: string,
    city: string,
    index: string,
    country: string,
}

export type OrderItem = {
    id: number,
    productsInfo: CartSliceState
}

export type OrderItemWithInfo = OrderItem & OrderInfo

export type OrderPaidItem = {
    payment: OrderPayment,
} & OrderItemWithInfo

export interface OrderSliceState {
    orders: OrderItem[],
    ordersWithInfo: OrderItemWithInfo[],
    currentOrderId: number,
    ordersPaid: OrderPaidItem[]
}
