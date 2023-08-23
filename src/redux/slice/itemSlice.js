import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
