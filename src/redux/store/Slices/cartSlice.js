import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSizeAndType: false,
  cartItem: 0,
  openCategory: false,
  openSort: false,
  sortType: {
    name: "Rating (min)",
    sortProperty: "-rating",
  },
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
