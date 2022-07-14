import React, { useEffect } from "react";
import styles from "../styles/pages/ProductsPage.module.scss";
import { ProductCard } from "../components/ProductCard";
import { FilterCards } from "../components/FiltersCards";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store";

export const Products = () => {
  const {
    products = [],
    categories = [],
    isLoading = false,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []); // eslint-disable-line

  return (
    <>
      {isLoading ? (
        <h4>Loading</h4>
      ) : (
        <div className={styles.container}>
          <div className={styles.filterDiv}>
            <div className={styles.FiltersCard}>
              <FilterCards categories={categories?.items} />
            </div>
          </div>
          <div className={styles.grid}>
            {products?.map(
              ({ id, name, description, images, price, categories }) => (
                <ProductCard
                  key={id}
                  id={id}
                  img={images}
                  title={name}
                  category={categories}
                  description={description}
                  price={price}
                />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};
