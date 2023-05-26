import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slices/filterSlice";
import cartSlice from "./Slices/cartSlice";
import foodSlice from "./Slices/foodSlice";
import navBarSlice from "./Slices/navBarSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    food: foodSlice,
    navbar: navBarSlice,
  },
});
