import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Error404 from "../pages/notFound/Error404";
import CartPage from "../pages/cart/CartPage";

export const PATH = {
  ORDERS: "/orders",
  HERO: "/",
  WALLET: "/wallet",
  FAVORITES: "/favorites",
  PROMOTIONS: "/promotions",
  ADD_FRIENDS: "/invite_friends",
  HELP: "/help",
  CONTACT: "/contact",
};
const RouterRoot = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH.HERO} element={<App />} />
        <Route path={PATH.ORDERS} element={<CartPage />} />
        {/* <Route path={PATH.WALLET} element={<RegistrationPage />} />
        <Route path={PATH.FAVORITES} element={<Blogger />} />
        <Route path={PATH.PROMOTIONS} element={<PostsPage />} />
        <Route path={PATH.ADD_FRIENDS} element={<DetailsBlog />} />
        <Route path={PATH.HELP} element={<DetailsPost />} />
        <Route path={PATH.CONTACT} element={<EditPost />} /> */}
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterRoot;
