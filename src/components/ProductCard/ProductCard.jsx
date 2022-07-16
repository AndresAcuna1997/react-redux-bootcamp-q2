import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/slices/cartSlice";

import "./ProductCard.scss";

export const ProductCard = ({
  title,
  category,
  description,
  price,
  img,
  id,
}) => {
  const [showDesc, setshowDesc] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="ProductCard">
      <div className="cardHeader">
        <img src={img[0]} alt="" />
      </div>

      <div className="cardBody">
        <div className="categories-div">
          {category.map((item, index) => {
            let noSpaces = item.replace(" ", "");

            return (
              <span key={index} className={`${noSpaces} tag`}>
                {item}
              </span>
            );
          })}
        </div>
        <h3 title={title}>{title}</h3>
        <span
          className="descriptionProduct"
          onClick={() => setshowDesc(!showDesc)}
        >
          Description
        </span>
        {showDesc ? (
          <>
            <p>{description}</p>
          </>
        ) : null}

        <h2>
          <b>${price}</b>
        </h2>
      </div>

      <div className="btn-div">
        <button
          className="addCart-btn"
          onClick={() =>
            dispatch(
              addProductToCart({ title, category, description, price, img, id })
            )
          }
        >
          <span className="btn-content">
            Add to cart <BsFillCartPlusFill />
          </span>
        </button>
      </div>
    </div>
  );
};
