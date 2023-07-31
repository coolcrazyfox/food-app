import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItems,
  setOpenModal,
} from "../../../../redux/store/Slices/cartSlice";
import SuperModal from "../../../Modal/SuperModal";

const ClearCartBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.navbar.changeTheme);
  const onClickClear = () => {
    dispatch(setOpenModal(true));
    // <SuperModal>Empty the cart?</SuperModal>;

    // dispatch(clearItems());
    // if (window.confirm("Empty the cart?")) {
    //   dispatch(clearItems());
    // }
  };
  return (
    <>
      <div onClick={onClickClear} className="flex flex-row justify-between  ">
        <div className="flex flex-row">
          <HiShoppingCart
            size={30}
            className={theme === "dark" ? "text-orange-500 " : "text-white"}
          />
          <div
            className={
              theme === "dark"
                ? "text-start text-lg  mx-3 uppercase font-bold"
                : "text-start text-lg text-orange-500 mx-3 uppercase font-bold"
            }
          >
            Basket
          </div>
        </div>

        <div
          className={
            theme === "dark"
              ? "flex flex-row border border-orange-500 p-2 rounded-full cursor-pointer hover:shadow-lg hover:bg-gray-500 hover:text-white"
              : "flex flex-row border border-gray-200 hover:border-orange-500 text-gray-400 p-2 rounded-full cursor-pointer hover:shadow-lg hover:bg-gray-500 hover:text-white"
          }
        >
          <span
            className={
              theme === "dark" ? "text-orange-400 mx-1" : "text-white mx-1"
            }
          >
            <RiDeleteBinFill size={24} />
          </span>
          Clear the cart
        </div>
      </div>
      <SuperModal onClickYesBtn={onClickYesBtn}>Empty the cart?</SuperModal>
    </>
  );
};

export default ClearCartBtn;
