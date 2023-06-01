import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  openCategory: false,
  openSort: false,
  sortType: {
    name: "Rating (max)",
    sortProperty: "rating",
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
      state.openCategory = action.payload;
    },
    setOpenSort(state, action) {
      state.openSort = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    // setFilters(state, action) {
    //   state.categoryId = Number(action.payload.categoryId);
    //   state.sortType = action.payload.sortType;
    // },
  },
});
export const {
  setSearchValue,
  setCategoryId,
  setSort,
  setOpenCategory,
  setOpenSort,
  setFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
