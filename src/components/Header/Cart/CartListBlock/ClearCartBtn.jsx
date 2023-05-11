import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { RiDeleteBinFill } from "react-icons/ri";

const ClearCartBtn = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <HiShoppingCart size={30} />
        <div className="flex flex-row border border-orange-500 p-2 rounded-full cursor-pointer hover:shadow-lg hover:bg-gray-500 hover:text-white">
          <span className="text-orange-400 mx-1">
            <RiDeleteBinFill size={24} />
          </span>
          Clear the cart
        </div>
      </div>
    </>
  );
};

export default ClearCartBtn;