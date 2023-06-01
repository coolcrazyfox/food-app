import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changeTheme: "dark",
  openMenu: false,
  testOn: "",
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
    setTestOn(state, action) {
      state.testOn = action.payload;
    },
  },
});
export const { setOpenMenu, setChangeTheme, setTestOn } = navBarSlice.actions;
export default navBarSlice.reducer;
