import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartProductCard } from "../components/cartProductCard";
import styles from "../styles/pages/CartPage.module.scss";

export const Cart = () => {
  const { totalPrice, products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
          <h2>{totalPrice}</h2>
          <button>Check out</button>
        </div>
      </div>
    </div>
  );
};
