import React from "react";
import { RiStarSmileFill } from "react-icons/ri";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { useSelector } from "react-redux";

const AddFoodItem = ({
  count,
  name,
  price,
  types,
  rating,
  onClickAddItemHandler,
  sizeAndType,
  setSizeAndType,
}) => {
  const theme = useSelector((state) => state.navbar.changeTheme);

  return (
    <>
      <div
        className={
          theme === "dark"
            ? "flex justify-between px-2 py-4"
            : "flex justify-between px-2 py-4 text-white"
        }
      >
        <div className="flex flex-row font-bold  ">
          {name}

          <div className="px-2 flex flex-row ">
            <RiStarSmileFill size={24} className="text-orange-500" />
            <span className="text-base px-1">{rating}</span>
          </div>
        </div>

        <div className=" flex flex-row select-none">
          <span className=" text-center pt-1">
            {types && (
              <HiOutlineBarsArrowDown
                onClick={() => setSizeAndType(!sizeAndType)}
                size={20}
              />
            )}
          </span>
          <span className="mx-2">{price}$</span>
          <div
            onClick={onClickAddItemHandler}
            className="flex flex-row object-cover select-none border-2  border-orange-500 bg-white text-orange-500 px-2 rounded-full  h-7 cursor-pointer hover:bg-orange-500 hover:text-white "
          >
            <span className="flex max-w-max min-w-min">Add</span>
            {count > 0 && (
              <span className="ms-3 w-6  text-center rounded-full bg-white text-orange-500">
                {count}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFoodItem;
