import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Feature/CartSlice.js";

export const Store = configureStore({
  reducer: {
    cartValue: cartReducer,
  },
});
