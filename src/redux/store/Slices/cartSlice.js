import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSizeAndType: false,
  addItem: 0,
  openCategory: false,
  openSort: false,
  sortType: {
    name: "Rating (max)",
    sortProperty: "rating",
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
      state.addItem = state.addItem + 1;
    },
    setRemoveItem(state) {
      state.addItem = state.addItem - 1;
    },
  },
});
export const { setOpenSizeAndType, setAddItem, setRemoveItem } =
  cartSlice.actions;
export default cartSlice.reducer;
