import React, { useEffect, useState } from "react";
import styles from "../styles/pages/ProductsPage.module.scss";
import { ProductCard } from "../components/ProductCard/ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMock();
  }, []);

  const getMock = async () => {
    try {
      setLoading(true);
      const req = await fetch("data/products.json");
      const { data: dataReq } = await req.json();
      await setProducts([...dataReq.products.items]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <h4>Loading</h4>
      ) : (
        <div className={styles.container}>
          <div className={styles.filterDiv}>
            <div className={styles.FiltersCard}>FIILTERS</div>
          </div>
          <div className={styles.grid}>
            {products.map(
              ({ id, name, description, images, price, categories }) => (
                <ProductCard
                  key={id}
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
