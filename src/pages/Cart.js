import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CartProductCard } from "../components/cartProductCard";
import { createOrderAxios } from "../services";
import { setOrder, totalCount,emptyCart } from "../store/slices/cartSlice";
import styles from "../styles/pages/CartPage.module.scss";

export const Cart = () => {
  const {
    totalPrice = [],
    products = [],
    totalAmountProducts = 0,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(totalCount(products));
  }, [products]);

  const createOrder = (body) => {
    const res = createOrderAxios(body);

    res
      .then((res) => {
        if (res.status === 200) {
          dispatch(setOrder(res.data));
          dispatch(emptyCart(res.data));
          history.push("/order");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className={styles.titlePage}>Shopping Cart</h1>
      <div className={styles.cartPage}>
        <div className={styles.productsDiv}>
          {products?.map((product) => (
            <CartProductCard key={product.id} data={product} />
          ))}
        </div>
        <div className={styles.totalPriceDiv}>
          <h2>Order price: ${Math.round(totalPrice)}</h2>
          <h3>Total products: {totalAmountProducts}</h3>
          {totalAmountProducts > 0 ? (
            <button
              className={styles.checkOutBtn}
              onClick={() => createOrder(products)}
            >
              Check out
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
