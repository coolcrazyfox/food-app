import React from "react";
import FoodTypeAndSizeBlock from "./FoodTypeAndSizeBlock";
import AddFoodItem from "./AddFoodItem";
import { useDispatch, useSelector } from "react-redux";
import { RiStarSmileFill } from "react-icons/ri";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { setOpenSizeAndType } from "../../redux/store/Slices/cartSlice";

const FoodCard = ({ ...food }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.navbar.changeTheme);
  const openSizeType = useSelector((state) => state.cart.openSizeAndType);
  const { cartItem, openSizeAndType } = useSelector((state) => state.cart);
  const onClickAddItemHandler = () => {
    // setAddItem((addItem) => addItem + 1);
    // dispatch(setAddItem(cartItem));
  };
  return (
    <div
      className={
        theme === "dark"
          ? "border shadow-lg rounded-lg hover:scale-105 duration-400"
          : "border border-gray-600 shadow-gray-600 shadow-lg rounded-lg hover:scale-105 duration-400"
      }
    >
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
      <div
        className={
          theme === "dark"
            ? "flex justify-between px-2 py-4"
            : "flex justify-between px-2 py-4 text-white"
        }
      >
        <div className="flex flex-row font-bold  ">
          {food.name}

          <div className="px-2 flex flex-row ">
            <RiStarSmileFill size={24} className="text-orange-500" />
            <span className="text-base px-1">{food.rating}</span>
          </div>
        </div>

        <div className=" flex flex-row select-none">
          <span className=" text-center pt-1">
            {food.types && (
              <HiOutlineBarsArrowDown
                onClick={() => dispatch(setOpenSizeAndType(!openSizeAndType))}
                size={20}
              />
            )}
          </span>
          <span className="mx-2">{food.price}$</span>
          <div
            onClick={onClickAddItemHandler}
            className="flex flex-row object-cover select-none border-2  border-orange-500 bg-white text-orange-500 px-2 rounded-full  h-7 cursor-pointer hover:bg-orange-500 hover:text-white "
          >
            <span className="flex max-w-max min-w-min">Add</span>
            {cartItem > 0 && (
              <span className="ms-3 w-6  text-center rounded-full bg-white text-orange-500">
                {cartItem}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* <AddFoodItem food={food} /> */}

      {openSizeType && <FoodTypeAndSizeBlock food={food} />}
    </div>
  );
};

export default FoodCard;
