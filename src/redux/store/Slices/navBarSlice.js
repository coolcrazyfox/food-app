import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  openMenu: false,
  // // openSort: false,
  // sortType: {
  //   name: "Rating (min)",
  //   sortProperty: "-rating",
  // },
};
export const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setOpenMenu(state, action) {
      state.openMenu = action.payload;
    },
  },
});
export const { setOpenMenu } = navBarSlice.actions;
export default navBarSlice.reducer;
