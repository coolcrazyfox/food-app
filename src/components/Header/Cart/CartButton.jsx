import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <Link to="/orders">
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full ">
        <span className="mr-2"> {totalPrice}$ </span>
        <BsFillCartFill
          size={20}
          className="mr-2 text-orange-500 hover:text-white "
        />{" "}
        {/* Cart */}
        <span className="ml-2 bg-white text-black rounded-full max-h-full w-6">
          {items}
        </span>
      </button>
    </Link>
  );
};

export default CartButton;
