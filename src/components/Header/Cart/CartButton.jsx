import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <Link to="/">
      <button
        onClick={() => alert("cart onClick ")}
        className="bg-black text-white hidden md:flex items-center py-2 rounded-full "
      >
        <BsFillCartFill
          size={20}
          className="mr-2 text-orange-500 hover:text-white "
        />{" "}
        Cart
        <span className="ml-2 bg-white text-black rounded-full max-h-full w-6">
          0
        </span>
      </button>
    </Link>
  );
};

export default CartButton;
