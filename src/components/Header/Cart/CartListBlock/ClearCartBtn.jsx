import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../../../redux/store/Slices/cartSlice";

const ClearCartBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.navbar.changeTheme);
  return (
    <>
      <div
        onClick={() => dispatch(clearItems())}
        className="flex flex-row justify-between"
      >
        <HiShoppingCart
          size={30}
          className={theme === "dark" ? "" : "text-white"}
        />
        <div
          className={
            theme === "dark"
              ? "flex flex-row border border-orange-500 p-2 rounded-full cursor-pointer hover:shadow-lg hover:bg-gray-500 hover:text-white"
              : "flex flex-row border border-orange-500 text-gray-400 p-2 rounded-full cursor-pointer hover:shadow-lg hover:bg-gray-500 hover:text-white"
          }
        >
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
