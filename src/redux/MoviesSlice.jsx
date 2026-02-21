import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const MoviesSlice = createSlice({
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
  },
});

export const { increment, decrement } = MoviesSlice.actions;

export default MoviesSlice.reducer;
