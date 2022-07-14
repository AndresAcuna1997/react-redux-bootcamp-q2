import React, { useEffect, useState } from "react";
import styles from "../styles/pages/ProductsPage.module.scss";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../store";

export const Products = () => {
  const {
    products = [],
    categories = [],
    isLoading = false,
    page,
    maxItems,
    category,
    totalPages,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [totalPagesAux, setTotalPagesAux] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []); // eslint-disable-line

  let aux = [];

  useEffect(() => {
    for (let index = 0; index < totalPages; index++) {
      aux.push(index + 1);
    }
    setTotalPagesAux([...aux]);
  }, [maxItems, category]); // eslint-disable-line

  const changeHandler = (e) => {
    const paginationPage = e.target.name === "page" ? e.target.value : page;
    const paginationItems =
      e.target.name === "maxItem" ? e.target.value : maxItems;
    const searchCategory =
      e.target.name === "category" ? e.target.value : category;

    dispatch(getProducts(paginationPage, paginationItems, searchCategory));
  };

  return (
    <>
      {isLoading ? (
        <h4>Loading</h4>
      ) : (
        <div className={styles.container}>
          <div className={styles.test}>
            <div className={styles.paginationDiv}>
              {/* Page select  */}
              <label>
                <b>Page</b>
              </label>
              <select
                className={`${styles.selectTemp} ${styles.round}`}
                name="page"
                defaultValue={page}
                onChange={changeHandler}
              >
                {totalPagesAux?.map((pag, i) => (
                  <option key={i} value={pag}>
                    {pag}
                  </option>
                ))}
              </select>

              {/* Max items select  */}
              <label>
                <b>Number of items</b>
              </label>
              <select
                className={`${styles.selectTemp} ${styles.round}`}
                name="maxItem"
                defaultValue={maxItems}
                onChange={changeHandler}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>

              {/* Category  select  */}
              <label>
                <b>Category</b>
              </label>
              <select
                className={`${styles.selectTemp} ${styles.round}`}
                name="category"
                defaultValue={category}
                onChange={changeHandler}
              >
                <option value="">
                  <b>Select a category</b>
                </option>
                {categories?.map(({ id, name }) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <>
              {products.length !== 0 ? (
                <div className={styles.grid}>
                  <>
                    {products?.map(
                      ({
                        id,
                        name,
                        description,
                        images,
                        price,
                        categories,
                      }) => (
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
                  </>
                </div>
              ) : (
                <h2 className={styles.errProducts}>No items for this page</h2>
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
};
