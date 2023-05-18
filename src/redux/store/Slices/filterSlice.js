import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  openType: false,
  sortType: {
    name: "Rating (min)",
    sortProperty: "-rating",
  },
};
export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sortType = action.payload;
    },
  },
});
export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
