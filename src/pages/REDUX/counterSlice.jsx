import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 1,
  status: 'idle',
  price1: 16000,
  price2: 150000
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.price1 += 16000;
      state.price2 += 150000
    },
    decrement: (state) => {
      state.value -= 1;
      state.price1 -= 16000;
      state.price2 -= 150000
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectPrice1 = (state) => state.counter.price1;
export const selectPrice2 = (state) => state.counter.price2;


export default counterSlice.reducer;