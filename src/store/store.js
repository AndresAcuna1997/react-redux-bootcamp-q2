import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { productSlice } from "./slices/productsSlice";
import { AuthSlice } from "./slices/AuthSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    auth: AuthSlice.reducer,
  },
});
