import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  minusItem,
  addItem,
  removeItem,
  setOpenModal,
} from "../../../../redux/store/Slices/cartSlice";
import SuperModal from "../../../Modal/SuperModal";

const CartItem = ({
  id,
  ingredients,
  weight,
  imageUrl,
  name,
  price,
  type,
  size,
  count,
  // category,
}) => {
  const theme = useSelector((state) => state.navbar.changeTheme);
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemoveItem = () => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(removeItem(id));
    }
  };
  return (
    <div
      className={
        theme === "dark"
          ? "flex flex-row border shadow-gray-300  shadow-lg rounded-lg hover:scale-105 duration-400 my-4  max-w-[840px]"
          : "flex flex-row text-gray-200 border shadow-gray-400  shadow-md rounded-lg hover:scale-105 duration-400 my-4  max-w-[840px]"
      }
    >
      <img
        src={imageUrl}
        alt={"cart item"}
        className="flex flex-wrap max-w-[150px] h-auto object-cover rounded-lg "
      />
      <div className="flex flex-col text-lg px-7 my-3 h-auto lg:max-w-[500px] md:min-w-fit ">
        <h3 className="text-orange-500 font-bold">{name}</h3>
        {type ? <h4 className="text-sm font-bold"> {type}</h4> : ""}
        <div className="flex flex-wrap h-auto text-sm lg:max-w-[300px]">
          {ingredients}
        </div>
        <div className="text-sm text-orange-500 font-bold">{weight}g</div>
        {size ? <div className="text-sm font-medium">{size}cm.</div> : ""}
      </div>
      <div className="flex flex-row w-full items-center justify-center ">
        <div className=" flex flex-row lg:mx-9 md:mx-0 justify-between items-center px-5 h-full ">
          <span
            disabled={false}
            onClick={onClickMinus}
            className={
              count > 0
                ? "flex items-center select-none justify-center lg:mx-2 md:-mx-1 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500  hover:shadow-lg cursor-pointer"
                : "flex items-center bg-gray-300 select-none justify-center lg:mx-2 md:-mx-1 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500  hover:shadow-lg cursor-pointer"
            }
          >
            -
          </span>
          <div className="font-bold mx-2 ">{count}</div>
          <span
            onClick={onClickPlus}
            className="flex items-center select-none justify-center lg:mx-2 md:-mx-1 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500 hover:shadow-lg cursor-pointer"
          >
            +
          </span>
        </div>
        <div className="flex flex-row lg:items-center lg:justify-start md:items-start md:justify-end min-h-[30px] w-full ">
          <div className="flex items-center  justify-center lg:mx-2 md:mx-1 font-bold   min-w-[60px] min-h-[40px] text-center text-lg ">
            {price * count}$
          </div>
        </div>
      </div>
      <div className="flex  w-full  p-1 justify-end  text-gray-400 hover:text-orange-500 font-bold  text-right">
        <RiCloseCircleLine onClick={onClickRemoveItem} size={18} />
      </div>
    </div>
  );
};

export default CartItem;
