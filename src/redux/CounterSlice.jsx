import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value <= 0) return;
      state.value -= 1;
    },
    increaseByAmount: (state, action) => {
      state.value += action.payload;
    },
    multiplyBy3: (state) => {
      state.value *= 3;
    },
  },
});

export const { increment, decrement, increaseByAmount, multiplyBy3 } =
  CounterSlice.actions;

export default CounterSlice.reducer;
