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
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});
