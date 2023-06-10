import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {CandleItem, CandleSliceState, SelectedCandleType} from "./types";

export const fetchCandles = createAsyncThunk('candles/fetchCandlesStatus', async () => {
    const {data} = await axios.get<CandleItem[]>('https://63f20e814f17278c9a1f42b0.mockapi.io/candles')

    return data
})

const initialState: CandleSliceState = {
    candles: [],
    status: 'loading',
    selectedCandle: {
        imageUrl: '',
        title: '',
        price: 0,
    }
}

const slice = createSlice({
    name: 'candles',
    initialState,
    reducers: {
        setSelectedCandle(state, action: PayloadAction<SelectedCandleType>) {
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

export const {setSelectedCandle} = slice.actions

export default slice.reducer
