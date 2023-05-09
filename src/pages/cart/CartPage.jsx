import React from "react";
import EmptyCart from "../../components/Header/Cart/EmptyCart";
import { HiShoppingCart } from "react-icons/hi";

const CartPage = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        Cart
      </h1>
      <HiShoppingCart size={30} />
      <div className="border shadow-lg rounded-lg hover:scale-105 duration-400"></div>
      <EmptyCart />
    </div>
  );
};

export default CartPage;
