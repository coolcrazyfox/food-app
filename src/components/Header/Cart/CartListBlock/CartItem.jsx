import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const CartItem = ({ ...cart }) => {
  return (
    <div className="flex flex-row border shadow-lg rounded-lg hover:scale-105 duration-400 my-4  max-w-[800px]">
      <img
        src={cart.imageUrl}
        alt={"cart item"}
        className="w-[100px] h-[90px] object-cover rounded-lg "
      />
      <div className="flex flex-col text-lg px-7 my-3 h-auto min-w-[300px] ">
        <h3 className="text-orange-500 font-bold">{cart.name}</h3>
        <h2>
          told <span>26cm.</span>
        </h2>
      </div>
      <div className=" flex flex-row justify-between items-center px-5 mx-9 h-auto">
        <span
          onClick={() => {}}
          className="flex items-center justify-center mx-2 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500  hover:shadow-lg "
        >
          -
        </span>
        <div className="font-bold mx-2">1</div>
        <span
          onClick={() => {}}
          className="flex items-center justify-center mx-2 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500 hover:shadow-lg "
        >
          +
        </span>
      </div>
      <div className="flex items-center justify-center mx-2 font-bold   min-w-[30px] text-center">
        <p>{cart.price}$</p>
      </div>
      <RiCloseCircleLine
        size={24}
        className="flex items-center justify-center ml-20 mt-3 text-gray-400 hover:text-orange-500 font-bold  text-center"
      />
    </div>
  );
};

export default CartItem;
