import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changeTheme: "dark",
  openMenu: false,
};
export const navBarSlice = createSlice({
  name: "navbar",
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
