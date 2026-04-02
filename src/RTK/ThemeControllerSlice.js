import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarktheme: true,
};

const ThemeControllerSlice = createSlice({
  name: "ThemeControll",
  initialState,
  reducers: {
    themeToggle: (state, action) => {
      state.isDarktheme = !state.isDarktheme;
    },
  },
});

export const { themeToggle } = ThemeControllerSlice.actions;
export default ThemeControllerSlice.reducer;
