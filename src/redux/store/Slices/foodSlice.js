import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [],
  sizes: [],
  activeType: 0,
  activeSize: 0,
  sizeAndType: false,
};
export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setSizeAndType(state, action) {
      state.sizeAndType = action.payload;
    },
    setActiveType(state, action) {
      state.activeType = action.payload;
    },
    setActiveSize(state, action) {
      state.activeSize = action.payload;
    },
  },
});
export const { setSizeAndType, setActiveType, setActiveSize } =
  foodSlice.actions;
export default foodSlice.reducer;
