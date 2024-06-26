import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import Shop from "./components/Shop.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { Toaster } from 'react-hot-toast';
import { productsAndCartData } from "./components/Loader/getCardData.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    loader: productsAndCartData,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/cart',
        element:<Cart/>,
        loader: productsAndCartData
      },
      {
        path:'/shop',
        element:<Shop/>,
        loader:()=> fetch("products.json")
      },
      {
        path:'/about',
        element:<About/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <RouterProvider router={router} />
  <Toaster />
  </>
);
