import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItem.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ ...item, quantity: 1 });
      }
    },
    DeleteItem: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, DeleteItem } = CartSlice.actions;
export default CartSlice.reducer;
