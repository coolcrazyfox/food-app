import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/notFound/Error404";
import CartPage from "../pages/cart/CartPage";
import Hero from "../pages/hero/Hero";
import Food from "../components/FoodList/Food";
import Contact from "../components/Footer/Contact";
import Category from "../components/Footer/Category";

export const PATH = {
  HERO: "/food-app",
  ORDERS: "/orders",
  FOOD: "/food",
  FAVORITES: "/favorites",
  PROMOTIONS: "/promotions",
  ADD_FRIENDS: "/invite_friends",
  HELP: "/help",
  CONTACT: "/contact",
};
const RouterRoot = ({ searchValue }) => {
  return (
    <div>
      <Routes>
        <Route path={PATH.HERO} element={<Hero />} />
        <Route path={PATH.FOOD} element={<Food />} />
        <Route path={PATH.ORDERS} element={<CartPage />} />
        <Route path={PATH.FAVORITES} element={<Category />} />
        {/*<Route path={PATH.PROMOTIONS} element={<PostsPage />} />
        <Route path={PATH.ADD_FRIENDS} element={<DetailsBlog />} />
        <Route path={PATH.HELP} element={<DetailsPost />} />*/}
        <Route path={PATH.CONTACT} element={<Contact />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterRoot;
