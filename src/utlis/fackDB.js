// Add data to localstorage
let shoppingCart = {};

const addToDb = (id) => {
  // localStorage.setItem("shopping-cart",id)

  // get the previous data from localStorage

  const storeCart = localStorage.getItem("shopping-cart");

  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  // console.log(quantity)
  // console.log(shoppingCart[id])

  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
    // console.log(shoppingCart[id],newQuantity)
  } else {
    shoppingCart[id] = 1;
    // console.log(shoppingCart[id])
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// get the data from localstoreage

const getStoredCart = () => {
  const cartData = localStorage.getItem("shopping-cart");

  if (cartData) {
    shoppingCart = JSON.parse(cartData);
  }
  return shoppingCart;
};

// Remove form data localStoreage data

const getRemoveData = (id) => {
  const storeCart = localStorage.getItem("shopping-cart");

  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);

      if(id in shoppingCart){
        delete shoppingCart[id];
      }
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};


// clear all data from remove 
const deletShopingCart = () => localStorage.removeItem("shopping-cart")

export { addToDb, getStoredCart,getRemoveData,deletShopingCart };
