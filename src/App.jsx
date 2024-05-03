import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";


export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

function App() {
  const { cartAarray, products } = useLoaderData();
  const [cart,setCart] = useState(cartAarray);

  const cartAlart = sessionStorage.getItem("alert");
  if(cart.length > 0 && cartAlart !== "true"){
    alert("you have item in cart")
    sessionStorage.setItem("alert",true)
  }
  
  return (
    <>
      <ProductsContext.Provider value={{cartAarray, products}}>
        <CartContext.Provider value={[cart,setCart]}>
          <Header />
          <div className="md:min-h-[calc(100vh-137px)]">
            <Outlet />
          </div>
          <Footer />
        </CartContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
