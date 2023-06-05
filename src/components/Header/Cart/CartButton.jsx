import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <Link to="/orders">
      <button className="lg:flex-row md:flex-row flex bg-black text-white   items-center py-2 rounded-full ">
        <span className="lg:mr-2 sm:m-0 bg-slate-600"> {totalPrice}$ </span>
        <BsFillCartFill className="lg:mr-2 sm:mx-[2px] text-orange-500 hover:text-white " />{" "}
        {/* Cart */}
        {items.length > 0 ? (
          <span className=" bg-white text-black rounded-full max-h-full lg:w-6 md:min-w-[20px] sm:min-w-[15px] ml-1 px-[4px]">
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
