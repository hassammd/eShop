import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice/CartSlice";
import ThemeControllerSlice from "./ThemeControllerSlice";
import userSlice from "./UsersSlice/UsersSlice";
import productSlice from "./ProductSlice/CategoriesSlice";
import ProductCategorySlice from "./ProductCategorySlice/ProductCategorySlice";
import SingleProductSlice from "./SingleProductSlice/SingleProductSlice";
import ProductCartSlice from "./ProductCartSlice/ProductCartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    theme: ThemeControllerSlice,
    user: userSlice,
    categories: productSlice,
    productCategory: ProductCategorySlice,
    singleProduct: SingleProductSlice,
    productCart: ProductCartSlice,
  },
});
