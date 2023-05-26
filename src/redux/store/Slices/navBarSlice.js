import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changeTheme: false,
  openMenu: false,
  // // openSort: false,
  // sortType: {
  //   name: "Rating (min)",
  //   sortProperty: "-rating",
  // },
};
export const navBarSlice = createSlice({
  name: "navBar",
  initialState,
  reducers: {
    setOpenMenu(state, action) {
      state.openMenu = action.payload;
    },
    setChangeTheme(state, action) {
      state.changeTheme = action.payload;
    },
  },
});
export const { setOpenMenu, setChangeTheme } = navBarSlice.actions;
export default navBarSlice.reducer;
