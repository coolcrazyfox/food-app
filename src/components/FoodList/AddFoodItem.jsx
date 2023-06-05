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
        <div className="flex flex-col">
          {/* Title food */}
          <div className="flex  lg:flex-row font-bold sm:flex-col ml-2 mb-1">
            {name}
          </div>
          <div className="flex flex-row w-full ">
            <div className=" flex flex-row select-none  justify-between ">
              <div
                onClick={onClickAddItemHandler}
                className="flex flex-row  mx-2 object-cover select-none border-2  border-orange-500 bg-white text-orange-500 px-2 rounded-full  h-7 cursor-pointer hover:bg-orange-500 hover:text-white "
              >
                <span className="flex max-w-max min-w-min ">Add</span>
                {count > 0 && (
                  <span className="ms-2 w-6  text-center rounded-full bg-white text-orange-500">
                    {count}
                  </span>
                )}
              </div>
              <span className="mr-2 font-normal ">{price}$</span>
              <RiStarSmileFill size={24} className="text-orange-500 ml-1" />

              <span className="text-base px-1 mr-[2px]">{rating}</span>

              <span className=" text-center pt-1">
                {types && (
                  <HiOutlineBarsArrowDown
                    onClick={() => setSizeAndType(!sizeAndType)}
                    size={20}
                  />
                )}
              </span>
            </div>

            {/* Size and Type */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFoodItem;
