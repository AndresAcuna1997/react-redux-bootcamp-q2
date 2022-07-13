import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    isLoading: false,
  },
  reducers: {
    startLoadingProducts: (state /* action */) => {
      state.isLoading = true;
    },

    stopLoadingProducts: (state /* action */) => {
      state.isLoading = false;
    },

    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.categories = action.payload.categories;
    },
  },
});
export const { startLoadingProducts, setProducts, stopLoadingProducts } =
  productSlice.actions;
