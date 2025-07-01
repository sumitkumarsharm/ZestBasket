import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
