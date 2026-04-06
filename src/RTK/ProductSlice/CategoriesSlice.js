import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const fetchProductsCategories = createAsyncThunk(
  "products",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories",
      );
      const categoriesList = response.data;

      const categoriesWithImage = Promise.all(
        categoriesList.slice(0, 30).map(async (items) => {
          const productsRes = await axios.get(
            `https://dummyjson.com/products/category/${items.slug}`,
          );

          return { ...items, image: productsRes.data.products[0]?.thumbnail };
        }),
      );

      return categoriesWithImage;
      //products ke image fetch for every catagroy
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(fetchProductsCategories.pending, (state, action) => {
      state.loading = true;
      state.categories = [];
    });
    addBuilder.addCase(fetchProductsCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    addBuilder.addCase(fetchProductsCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { fetchProductsCategories };
export default productSlice.reducer;
