import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import SingelCart from "./SingelCart";
import { addToDb } from "../utlis/fackDB";
import toast from "react-hot-toast";
import { CartContext, ProductsContext } from "../App";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (product) => {
    // console.log(product)
    let newCarData = [];
    const exsite = cart.find(
      (exsiteProduct) => exsiteProduct.id === product.id
      
    );

    if (!exsite) {
      product.quantity = 1;
      newCarData = [...cart, product];
    } else {
      const rest = cart.filter(
        (exsiteProduct) => exsiteProduct.id !== product.id
      );
      exsite.quantity = exsite.quantity + 1;
      newCarData = [...rest,exsite]
    }
    setCart(newCarData)
    addToDb(product.id);
    toast.success("Successfully Product Added! 🔥");
  };
  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((product) => (
          <SingelCart
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
