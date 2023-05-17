import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./Slices/filterSlice";
import { cartSlice } from "./Slices/cartSlice";

export const store = configureStore({
  reducer: { filter: filterSlice, cart: cartSlice },
});
