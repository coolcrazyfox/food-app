import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./Slices/filterSlice";
import { cartSlice } from "./Slices/cartSlice";
import { foodSlice } from "./Slices/foodSlice";

export const store = configureStore({
  reducer: { filter: filterSlice, cart: cartSlice, food: foodSlice },
});
