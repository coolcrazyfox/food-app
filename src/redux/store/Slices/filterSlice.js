import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openType: false,
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    inc,
  },
});
export const { inc } = filterSlice.actions;
export default filterSlice.reducer;