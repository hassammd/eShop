import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categoryItems: [],
  loading: false,
  error: null,
};

const fetchProductCategory = createAsyncThunk(
  "product/category",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${payload}`,
        // `/api/dummyjson/products/category/${payload}`,
      );

      return response.data.products;
    } catch (error) {
      return rejectWithValue("Some thing went wrong");
    }
  },
);

const ProductCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (addBuilder) => {
    addBuilder.addCase(fetchProductCategory.pending, (state, action) => {
      state.loading = true;
      state.categoryItems = [];
    });
    addBuilder.addCase(fetchProductCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryItems = action.payload;
    });
    addBuilder.addCase(fetchProductCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { fetchProductCategory };
export default ProductCategorySlice.reducer;
