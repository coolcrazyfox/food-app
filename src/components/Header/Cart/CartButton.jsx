import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <Link to="/orders">
      <button className="flex flex-row  bg-black text-white   items-center py-2 rounded-full max-w-[140px] ">
        {items.length > 0 ? (
          <>
            {" "}
            <span className="lg:mr-2  sm:m-0 "> {totalPrice}$ </span>
            <BsFillCartFill className="lg:mr-2 sm:mx-[2px] text-orange-500 hover:text-white " />
            <span className=" bg-white text-black rounded-full max-h-full lg:w-6 md:min-w-[20px] sm:min-w-[15px] px-[4px]">
              {totalCount}
            </span>
          </>
        ) : (
          <BsFillCartFill size={18} className="text-orange-500" />
        )}
      </button>
    </Link>
  );
};

export default CartButton;
