import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Error404 from "../pages/notFound/Error404";
import CartPage from "../pages/cart/CartPage";
import Hero from "../pages/hero/Hero";
import Food from "../components/FoodList/Food";
import Contact from "../components/Footer/Contact";
import Category from "../components/Footer/Category";

export const PATH = {
  ORDERS: "/orders",
  HERO: "/food-app",
  WALLET: "/wallet",
  FAVORITES: "/favorites",
  PROMOTIONS: "/promotions",
  ADD_FRIENDS: "/invite_friends",
  HELP: "/help",
  CONTACT: "/contact",
  FOOD: "/food",
};
const RouterRoot = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH.HERO} element={<Hero />} />
        <Route path={PATH.ORDERS} element={<CartPage />} />
        <Route path={PATH.WALLET} element={<Food />} />
        <Route path={PATH.FAVORITES} element={<Category />} />
        {/*<Route path={PATH.PROMOTIONS} element={<PostsPage />} />
        <Route path={PATH.ADD_FRIENDS} element={<DetailsBlog />} />
        <Route path={PATH.HELP} element={<DetailsPost />} />*/}
        <Route path={PATH.CONTACT} element={<Contact />} />
        <Route path={PATH.FOOD} element={<Food />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterRoot;
