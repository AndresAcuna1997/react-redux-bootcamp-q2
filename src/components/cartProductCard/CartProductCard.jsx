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
        <small>
          <b>{category}</b>
        </small>
        <p className={styles.description} title={description}>
          {description}
        </p>
        <div className={styles.qtyDiv}>
          <label>
            <b>Quantity: </b>
          </label>
          <input type="number" value={qty} onChange={(e) => handleChange(e)} />
        </div>
      </div>
      <div className={styles.priceDiv}>
        <h2>${Math.round(price)} P/U </h2>
        <small>
          Final price of this product: <b>${Math.round(price * qty)}</b>
        </small>

        <button
          className={styles.deleteBtn}
          onClick={() => dispatch(deleteProduct(id))}
        >
          Remove <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};
