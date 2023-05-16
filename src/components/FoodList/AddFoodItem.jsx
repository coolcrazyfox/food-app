import React from "react";
import { RiStarSmileFill } from "react-icons/ri";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";

const AddFoodItem = ({ food, addItem, onClickAddItemHandler, sizeAndType }) => {
  return (
    <>
      <div className="flex justify-between px-2 py-4">
        <div className="flex flex-row font-bold  ">
          {food.name}
          <div className="px-2 flex flex-row ">
            <RiStarSmileFill size={24} className="text-orange-500" />
            <span className="text-base px-1">{food.rating}</span>
          </div>
        </div>
        {sizeAndType && <HiOutlineBarsArrowDown size={24} />}

        <div className=" flex flex-row select-none">
          <span className="mx-2">{food.price}$</span>
          <div
            onClick={onClickAddItemHandler}
            className="flex flex-row object-cover select-none border-2  border-orange-500 bg-white text-orange-500 px-2 rounded-full  h-7 cursor-pointer hover:bg-orange-500 hover:text-white "
          >
            <span className="flex max-w-max min-w-min">Add</span>
            {addItem > 0 && (
              <span className="ms-3 w-6  text-center rounded-full bg-white text-orange-500">
                {addItem}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFoodItem;
