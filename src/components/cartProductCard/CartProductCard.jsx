import { useDispatch } from "react-redux";
import { deleteProduct, modifyQuantity } from "../../store/slices/cartSlice";
import styles from "./styles.module.scss";

export const CartProductCard = ({ data }) => {

  const dispatch = useDispatch();
  const { category, description, id, img, price, qty, title } = data;

  const handleChange = (e) => {
    dispatch(modifyQuantity({ qty: Number(e.target.value), id }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img src={img[0]} alt={title} />
      </div>
      <div className={styles.productDetails}>
        <h2>{title}</h2>
        <p className={styles.description} title={description}>
          {description}
        </p>
        <small>{category}</small>
      </div>
      <div className={styles.priceDiv}>
        <h3>${price}</h3>
        <input type="number" value={qty} onChange={(e) => handleChange(e)} />
        <button onClick={() => dispatch(deleteProduct(id))}>Remove</button>
      </div>
    </div>
  );
};
