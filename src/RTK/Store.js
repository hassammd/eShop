import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice/CartSlice";
import ThemeControllerSlice from "./ThemeControllerSlice";
import userSlice from "./UsersSlice/UsersSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    theme: ThemeControllerSlice,
    user: userSlice,
  },
});
