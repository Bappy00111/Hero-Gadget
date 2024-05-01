import React from "react";
import { useLoaderData } from "react-router-dom";
import SingelCart from "./SingelCart";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((product) => (
          <SingelCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
