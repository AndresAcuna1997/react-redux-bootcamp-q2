import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    page: 1,
    category: "",
    totalPages: 3,
    maxItems: 20,
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
      // state.products = action.payload.products;
      state.products = action.payload;
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setPageAndItems: (state, action) => {
      state.page = action.payload.page;
      state.maxItems = action.payload.maxItems;
    },
  },
});
export const {
  startLoadingProducts,
  setProducts,
  stopLoadingProducts,
  setCategories,
  setPageAndItems,
  setTotalPages,
  setCategory,
} = productSlice.actions;
