import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navBarReducer";

const store = configureStore({
  reducer: {
    navbar: navBarReducer,
  },
});
export default store;
