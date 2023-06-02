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
    addProduct(state, action) {
      state.items.push(action.payload);
    },
  },
});
export const { setOpenSizeAndType, addProduct } = cartSlice.actions;
export default cartSlice.reducer;
