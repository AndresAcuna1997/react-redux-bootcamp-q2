import React from "react";
import styles from "../styles/pages/OrderPreview.module.scss";
import { FiCheckCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderPreview = () => {
  const { orderData = {} } = useSelector((state) => state.cart);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconDiv}>
          <FiCheckCircle />
        </div>
        <h1>{orderData.message}</h1>
        <h3>Order number: #{orderData.order}</h3>
        <Link to="/products">Go back to the store</Link>
      </div>
    </div>
  );
};

export default OrderPreview;
