import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSizeAndType: false,
  cartItem: 0,
  totalPrice: 0,
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenSizeAndType(state, action) {
      state.openSizeAndType = action.payload;
    },
    setAddItem(state) {
      state.cartItem = state.cartItem + 1;
    },
    setRemoveItem(state) {
      state.cartItem = state.cartItem - 1;
    },
  },
});
export const { setOpenSizeAndType, setAddItem, setRemoveItem } =
  cartSlice.actions;
export default cartSlice.reducer;
