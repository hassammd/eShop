import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

const fetchUser = createAsyncThunk(
  "fetchUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue("Error agya");
    }
  },
);

//fetchUser->pending
//fetchUser -> fulfilled
//fetchUser -> rejected

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    addBuilder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    });
    addBuilder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { fetchUser };
export default userSlice.reducer;
