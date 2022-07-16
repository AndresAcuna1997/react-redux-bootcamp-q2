import { createSlice } from "@reduxjs/toolkit";

const calculateFinalPrice = (arrProducts) => {
  let total = 0;

  arrProducts.forEach((product) => {
    total += product.price * product.qty;
  });

  return total;
};

const calculateFinalTotalItems = (arrProducts) => {
  let total = 0;

  arrProducts.forEach((product) => {
    total += product.qty;
  });

  return total;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    totalAmountProducts: 0,
    orderData: { order: 0, message: "" },
  },
  reducers: {
    addProductToCart: (state, action) => {
      const productFound = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (productFound) {
        productFound.qty++;
        const index = state.products.findIndex(
          (product) => product.id === productFound.id
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
          if (action.payload.qty > 1) {
            product.qty = action.payload.qty;
          } else {
            product.qty = 1;
          }
        }
      });

      state.totalPrice = calculateFinalPrice(state.products);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.totalPrice = calculateFinalPrice(state.products);
    },

    totalCount: (state, action) => {
      const count = calculateFinalTotalItems(action.payload);
      state.totalAmountProducts = count;
    },

    setOrder: (state, action) => {
      state.orderData.order = action.payload.order;
      state.orderData.message = action.payload.message;
    },

    emptyCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});
export const {
  addProductToCart,
  modifyQuantity,
  deleteProduct,
  totalCount,
  setOrder,
  emptyCart,
} = cartSlice.actions;
