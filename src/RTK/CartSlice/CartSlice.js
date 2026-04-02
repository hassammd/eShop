import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (items) => items.id === newItem.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },

    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (items) => items.id !== action.payload,
      );
    },
    increaseCart: (state, action) => {
      const currentItem = state.cartItems.find(
        (items) => items.id === action.payload,
      );
      if (currentItem) {
        currentItem.quantity += 1;
      }
    },
    decreaseCart: (state, action) => {
      const currentItem = state.cartItems.find(
        (item) => item.id === action.payload,
      );
      if (currentItem && currentItem.quantity > 1) {
        currentItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeCart, increaseCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
