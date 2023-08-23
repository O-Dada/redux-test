import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slice/itemSlice";
import currencyReducer from "./slice/currencySlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    currency: currencyReducer,
  },
});
