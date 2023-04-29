import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCandles = createAsyncThunk('candles/fetchCandlesStatus', async () => {
    const {data} = await axios.get<CandleItem[]>('https://63f20e814f17278c9a1f42b0.mockapi.io/candles')

    return data
})

type CandleItem = {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    rating: number
}

type SelectedCandleType = {
    imageUrl: string,
    title: string,
    price: number,
}

interface CandleSliceState {
    candles: CandleItem[],
    status: 'loading' | 'success' | 'error',
    selectedCandle: SelectedCandleType
}

const initialState: CandleSliceState = {
    candles: [],
    status: 'loading',
    selectedCandle: {
        imageUrl: '',
        title: '',
        price: 0,
    }
}

const candleSlice = createSlice({
    name: 'candles',
    initialState,
    reducers: {
        setSelectedPizza(state, action: PayloadAction<SelectedCandleType>) {
            state.selectedCandle = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCandles.pending, (state) => {
            state.candles = [];
            state.status = 'loading';
        })
        builder.addCase(fetchCandles.fulfilled, (state, action) => {
            state.candles = action.payload;
            state.status = 'success';
        })
        builder.addCase(fetchCandles.rejected, (state) => {
            state.candles = [];
            state.status = 'error';
        })
    }
})

export const {setSelectedPizza} = candleSlice.actions

export default candleSlice.reducer
