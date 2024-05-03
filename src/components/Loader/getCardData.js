import { getStoredCart } from "../../utlis/fackDB";

 export const productsAndCartData = async () =>{

    const response = await fetch("products.json")
    const products = await response.json()

    const saveCart = getStoredCart();
    let cartAarray = [];
    for (const id in saveCart) {
      const data = products.find((product) => product.id === id);
      if (data) {
        data.quantity = saveCart[id];
        cartAarray.push(data);
      }
    }
    return {cartAarray,products};
}

// export default productsAndCartData;