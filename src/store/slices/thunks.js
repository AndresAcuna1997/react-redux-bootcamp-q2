import axios from "axios";
import {
  setCategories,
  setProducts,
  startLoadingProducts,
  stopLoadingProducts,
  setPageAndItems,
  setTotalPages,
  setCategory,
} from "./productsSlice";

const baseUrl = "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api";

export const getProducts = (page, maxItems, category) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());

    const reqProduct = await axios.get(`${baseUrl}/products`, {
      headers: {
        "x-api-key": "N7XoQ47Fo41xu6GXgp1ZK801Uq6CWR0T4GtVoMhi",
        "Content-Type": "application/json",
      },
      params: {
        page: page || 1,
        maxItems: maxItems || 20,
        category: category || "",
      },
    });

    const { data } = reqProduct;

    dispatch(setCategory(category));

    dispatch(setPageAndItems({ page, maxItems }));

    dispatch(setTotalPages(data.totalPages));

    dispatch(setProducts(data.items));

    dispatch(stopLoadingProducts());
  };
};

export const getCategories = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());

    const reqCategory = await axios.get(`${baseUrl}/categories`, {
      headers: {
        "x-api-key": "N7XoQ47Fo41xu6GXgp1ZK801Uq6CWR0T4GtVoMhi",
        "Content-Type": "application/json",
      },
    });

    const { data } = reqCategory;

    dispatch(setCategories(data.items));

    dispatch(stopLoadingProducts());
  };
};
