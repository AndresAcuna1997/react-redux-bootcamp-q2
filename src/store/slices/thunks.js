import {
  setProducts,
  startLoadingProducts,
  stopLoadingProducts,
} from "./productsSlice";

export const getProducts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());

    const req = await fetch("data/products.json");
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
