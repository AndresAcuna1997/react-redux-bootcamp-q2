import { BsFillTrashFill } from "react-icons/bs";
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
        <small>
          <b>{category}</b>
        </small>
      </div>
      <div className={styles.priceDiv}>
        <h2>${price}</h2>
        <input type="number" value={qty} onChange={(e) => handleChange(e)} />
        <button
          className={styles.deleteBtn}
          onClick={() => dispatch(deleteProduct(id))}
        >
          Remove <BsFillTrashFill />{" "}
        </button>
      </div>
    </div>
  );
};
