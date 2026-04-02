import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarktheme: false,
};

const ThemeControllerSlice = createSlice({
  name: "ThemeControll",
  initialState,
  reducers: {
    themeToggle: (state, action) => {
      console.log("ad");
      state.isDarktheme = !state.isDarktheme;
    },
  },
});

export const { themeToggle } = ThemeControllerSlice.actions;
export default ThemeControllerSlice.reducer;
