export type CartItem = {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    count: number,
    totalPrice: number
}

export interface CartSliceState {
    cartStore: CartItem[],
    subTotalPrice: number,
}
