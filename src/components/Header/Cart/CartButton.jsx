import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <Link to="/orders">
      <button className="bg-black text-white  md:flex items-center py-2 rounded-full ">
        <span className="mr-2"> {totalPrice}$ </span>
        <BsFillCartFill
          size={20}
          className="mr-2 text-orange-500 hover:text-white "
        />{" "}
        {/* Cart */}
        {items.length > 0 ? (
          <span className="ml-2 bg-white text-black rounded-full max-h-full w-6">
            {totalCount}
          </span>
        ) : (
          ""
        )}
      </button>
    </Link>
  );
};

export default CartButton;
