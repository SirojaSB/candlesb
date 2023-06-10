export type CandleItem = {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    rating: number
}

export type SelectedCandleType = {
    imageUrl: string,
    title: string,
    price: number,
}

export interface CandleSliceState {
    candles: CandleItem[],
    status: 'loading' | 'success' | 'error',
    selectedCandle: SelectedCandleType
}
