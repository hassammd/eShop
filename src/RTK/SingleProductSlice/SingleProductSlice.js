import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  loading: false,
  error: null,
};

const fetchSingleProduct = createAsyncThunk(
  "singleProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${payload}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went Wrong");
    }
  },
);

const SingleProductSlice = createSlice({
  name: "categrory/product",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(fetchSingleProduct.pending, (state, action) => {
      state.loading = true;
    });
    addBuilder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    addBuilder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { fetchSingleProduct };
export default SingleProductSlice.reducer;
