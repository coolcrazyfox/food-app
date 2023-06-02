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
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});
export const { setOpenSizeAndType, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
