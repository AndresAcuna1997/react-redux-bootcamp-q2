import React, { useEffect, useState } from "react";

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
        <h3>Loading</h3>
      ) : (
        <>
          <ul>
            {products.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
