import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const CartButton = () => {
  return (
    <>
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full ">
        <BsFillCartFill size={20} className="mr-2 text-orange-500" /> Cart
        <span
          className="ml-2 bg-white text-black rounded-full max-h-full max-w-1"
          style={{
            width: "1rem",
          }}
        >
          0
        </span>
      </button>
    </>
  );
};

export default CartButton;
