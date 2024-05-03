import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import { deletShopingCart, getRemoveData } from "../utlis/fackDB";
import toast from "react-hot-toast";
import { CartContext } from "../App";

const Cart = () => {
  const [cart,setCart] = useContext(CartContext || [])
  
  

  let total = 0;
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity;
    }
  }

  const handleRemoveItem = (id) => {
    const reamaning = cart.filter(product => product.id !== id);
    setCart(reamaning);
    getRemoveData(id);
    toast.error("Product Removed! 🔥");
  };

  const deleteCartHandler = () => {
    if (cart.length) {
      setCart([])
      deletShopingCart();
      return toast.success('All Items Removed! 👍')
    }
    return toast.error('Cart is empty! ❌')
  };

  const orderHandler = () =>{
    if(cart.length > 0){
      setCart([])
      deletShopingCart([])
      return toast.success("Order Done! 👍");
    }else{
      return toast.error('Cart is empty! ❌')
    }
  }
  
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col  max-w-3xl py-6 space-y-4 sm:p-10">
        <h1 className="sm:text-xl md:text-3xl font-semibold">
          {cart.length ? "Review Cart Item" : "Cart is EMPTY!"}
        </h1>
        <ul className="flex flex-col divide-y divide-gray-900 space-y-4">
          {cart.map((cartData) => (
            <CardItem
              key={cartData.id}
              cartData={cartData}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount: <span className="font-semibold">{total}$</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <>
              <button
                type="button"
                onClick={deleteCartHandler}
                className="btn-outlined"
              >
                Clear <span className="sr-only sm:not-sr-only">Cart</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/shop">
                <button
                  type="button"
                  // onClick={deleteCartHandler}
                  className="btn-outlined"
                >
                  Back <span className="sr-only sm:not-sr-only">To Shop</span>
                </button>
              </Link>
            </>
          )}

          <button
             onClick={orderHandler}
            type="button"
            className="btn-primary"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
