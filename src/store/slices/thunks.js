import axios from "axios";
import {
  setProducts,
  startLoadingProducts,
  stopLoadingProducts,
} from "./productsSlice";

const baseUrl = "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/"

export const getProducts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());

    const reqproduct = axios.get(
      `https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products`,
      {
        headers: {
          "x-api-key": "N7XoQ47Fo41xu6GXgp1ZK801Uq6CWR0T4GtVoMhi",
          "Content-Type": "application/json",
        },
        params: {
          page: 1,
        },
      }
    );

    const { data } = await reqproduct;
    
    dispatch(
      setProducts({
        products: data.items,
        categories: [],
      })
    );

    dispatch(stopLoadingProducts());
  };
};

export const getCategories = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());

    const req = await fetch(
      `https://6x8prpit9f.execute-api.us-east-1.amazonaws.com//api/products/page=${1}`
    );
    const { data: dataReq } = await req.json();
    dispatch(
      setProducts({
        products: dataReq.products,
        categories: dataReq.categories,
      })
    );

    dispatch(stopLoadingProducts());
  };
};
