import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/notFound/Error404";
import CartPage from "../pages/cart/CartPage";
import Hero from "../pages/hero/Hero";
import Food from "../components/FoodList/Food";
import Contact from "../pages/contact/Contact";
import LoginPage from "../pages/login/LoginPage";
import FavoritesPage from "./../pages/favorites/FavoritesPage";
import PromotionsPage from "./../pages/promotions/PromotionsPage";
import AddFriendsPage from "./../pages/add_friends/AddFriendsPage";

export const PATH = {
  HERO: "/food-app",
  ORDERS: "/orders",
  FOOD: "/food-app/food",
  FAVORITES: "/favorites",
  PROMOTIONS: "/promotions",
  ADD_FRIENDS: "/invite_friends",
  CONTACT: "/contact",
  LOGIN: "/login",
};
const RouterRoot = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH.HERO} element={<Hero />} />
        <Route path={PATH.FOOD} element={<Food />} />
        <Route path={PATH.ORDERS} element={<CartPage />} />
        <Route path={PATH.FAVORITES} element={<FavoritesPage />} />
        <Route path={PATH.PROMOTIONS} element={<PromotionsPage />} />
        <Route path={PATH.ADD_FRIENDS} element={<AddFriendsPage />} />
        <Route path={PATH.CONTACT} element={<Contact />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterRoot;
