import { createSlice } from "@reduxjs/toolkit";

export const cartManage = createSlice({
  name: "cartManage",
  initialState: {
    amount: 0,
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.amount += 1;
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.amount -= 1;
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearProducts: (state, action) => {
      state.amount = 0;
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, clearProducts } = cartManage.actions;

export default cartManage.reducer;
