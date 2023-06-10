export type OrderPayment = {
    paymentMethod: 'card' | 'upon receiving',
    cardInfo?: {
        cardNumber: string,
        nameSur: string,
        date: string,
        cvv: string
    }
}

export type OrderProduct = {
    title: string,
    totalPrice: number
}

export type InfoProducts = {
    cartStore: OrderProduct[],
    subTotalPrice: number,
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
    productsInfo: InfoProducts
}

export type OrderItemWithInfo = OrderItem & OrderInfo

export type OrderPaidItem = {
    payment: OrderPayment,
} & OrderItem

export interface OrderSliceState {
    orders: OrderItem[],
    ordersWithInfo: OrderItemWithInfo[],
    currentOrderId: number,
    ordersPaid: OrderPaidItem[]
}
