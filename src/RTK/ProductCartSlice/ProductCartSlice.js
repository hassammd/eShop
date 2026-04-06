import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  loading: false,
  error: "",
};

const ProductCartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((items) => items.id === newItem.id);
      if (!existingItem) {
        state.cart.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
    },
    increaseCart: (state, action) => {
      const currentItem = state.cart.find((item) => item.id === action.payload);
      if (currentItem) {
        currentItem.quantity += 1;
      }
    },
    decreaseCart: (state, action) => {
      const currentItem = state.cart.find((item) => item.id === action.payload);
      if (currentItem && currentItem.quantity > 1) {
        currentItem.quantity -= 1;
      }
    },

    removeCart: (state, action) => {
      state.cart = state.cart.filter((items) => items.id !== action.payload);
    },
  },
});

export const { addToCart, increaseCart, decreaseCart, removeCart } =
  ProductCartSlice.actions;
export default ProductCartSlice.reducer;
