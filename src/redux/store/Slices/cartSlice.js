import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSizeAndType: false,
  openModal: false,
  disabled: false,
  cartItem: 0,
  totalPrice: 0,
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenSizeAndType(state, action) {
      state.openSizeAndType = action.payload;
    },
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      if (!findItem) {
        state.items.push({ ...action.payload, count: 0 });
      }
      console.log("findItem", findItem.length);
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
export const {
  setOpenModal,
  setOpenSizeAndType,
  addItem,
  minusItem,
  removeItem,
  clearItems,
} = cartSlice.actions;
export default cartSlice.reducer;
