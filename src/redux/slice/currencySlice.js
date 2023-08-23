// currencySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = "USD";

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    toggleCurrency: (state) => {
      return state === "USD" ? "NGN" : "USD";
    },
  },
});

export const { toggleCurrency } = currencySlice.actions;
export default currencySlice.reducer;
