import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  smallScreenMenu: false,
};

const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleMenu: (state) => {
      state.smallScreenMenu = !state.smallScreenMenu;
    },
  },
});
export const { toggleThemeMode, toggleMenu } = navBarSlice.actions;
export default navBarSlice.reducer;
