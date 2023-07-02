import React from "react";
import EmptyCart from "../../components/Header/Cart/EmptyCart";
import CartList from "./../../components/Header/Cart/CartListBlock/CartList";
import ClearCartBtn from "./../../components/Header/Cart/CartListBlock/ClearCartBtn";
import { useSelector } from "react-redux";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        Basket
      </h1>
      {items.length > 0 ? (
        <>
          <ClearCartBtn />
          <CartList />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartPage;
