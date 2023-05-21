import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  openCategory: false,
  // openSort: false,
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
    setOpenCategory(state, action) {
      state.open = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.sortType = action.payload.sortType;
    },
    // setOpenSort(state, action) {
    //   state.open = action.payload;
    // },
  },
});
export const { setCategoryId, setSort, setOpenCategory, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
