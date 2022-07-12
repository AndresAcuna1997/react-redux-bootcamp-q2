import { createSlice } from "@reduxjs/toolkit";

const calculateFinalPrice = (arrProducts) => {
  let total = 0;

  arrProducts.forEach((product) => {
    total += product.price * product.qty;
    console.log(total);
  });

  return total;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      const productFound = state.products.find(
        (product) => product.id == action.payload.id
      );

      if (productFound) {
        productFound.qty++;
        const index = state.products.findIndex(
          (product) => product.id == productFound.id
        );

        state.products[index] = productFound;
      } else {
        state.products = [...state.products, { qty: 1, ...action.payload }];
      }

      state.totalPrice = calculateFinalPrice(state.products);
    },

    modifyQuantity: (state, action) => {
      state.products.forEach((product) => {
        if (product.id === action.payload.id) {
          product.qty = action.payload.qty;
        }
      });

      state.totalPrice = calculateFinalPrice(state.products);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id != action.payload
      );

      state.totalPrice = calculateFinalPrice(state.products);
    },
  },
});
export const { addProductToCart, modifyQuantity, deleteProduct } =
  cartSlice.actions;
