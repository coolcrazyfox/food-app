import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const CartItem = ({
  id,
  ingredients,
  weight,
  imageUrl,
  name,
  price,
  type,
  count,
}) => {
  return (
    <div className="flex flex-row border shadow-lg rounded-lg hover:scale-105 duration-400 my-4  max-w-[840px]">
      <img
        src={imageUrl}
        alt={"cart item"}
        className="flex flex-wrap max-w-[150px] h-auto object-cover rounded-lg "
      />
      <div className="flex flex-col text-lg px-7 my-3 h-auto lg:max-w-[500px] md:min-w-fit ">
        <h3 className="text-orange-500 font-bold">{name}</h3>
        <h2>{type}</h2>
        <div className="flex flex-wrap h-auto text-sm lg:max-w-[300px]">
          {ingredients}
        </div>
        <div className="text-sm">{weight}g</div>
        <div>26cm.</div>
      </div>
      <div className="flex flex-row ">
        <div className=" flex flex-row lg:mx-9 md:mx-0 justify-between items-center px-5 h-full ">
          <span
            onClick={() => {}}
            className="flex items-center justify-center lg:mx-2 md:-mx-1 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500  hover:shadow-lg "
          >
            -
          </span>
          <div className="font-bold mx-2 ">{count}</div>
          <span
            onClick={() => {}}
            className="flex items-center justify-center lg:mx-2 md:-mx-1 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500 hover:shadow-lg "
          >
            +
          </span>
        </div>
        <div className="flex flex-row lg:items-center lg:justify-start md:items-start md:justify-end min-h-[30px] w-full ">
          <div className="flex items-center  justify-center lg:mx-2 md:mx-1 font-bold   min-w-[60px] min-h-[40px] text-center text-lg ">
            {price * count}$
          </div>
          <RiCloseCircleLine className="flex h-full  justify-start items-start pb-[90px] text-gray-400 hover:text-orange-500 font-bold  text-center" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
