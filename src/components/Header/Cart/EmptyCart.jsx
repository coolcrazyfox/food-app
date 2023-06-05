import React from "react";
import smiley from "../../../assets/sadSmiley.png";
import empty from "../../../assets/emptyCart.png";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PATH } from "../../../routes/RouterRoot";
import { useSelector } from "react-redux";

const EmptyCart = () => {
  const theme = useSelector((state) => state.navbar.changeTheme);

  return (
    <>
      <div className="flex flex-col justify-between my-10">
        <div className="flex flex-row justify-center items-center w-full">
          <h1
            className={
              theme === "dark" ? "text-3xl px-3" : "text-3xl px-3 text-white"
            }
          >
            Your cart is empty
          </h1>
          <img src={smiley} alt="smiley" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center my-10">
          <img
            src={empty}
            alt="empty"
            className="flex justify-center  object-cover"
          />
        </div>
        <div
          className={
            theme === "dark"
              ? "flex  justify-center cursor-pointer w-full"
              : "flex  justify-center cursor-pointer w-full text-orange-400"
          }
        >
          <Link
            to={PATH.FOOD}
            className="flex flex-row justify-center cursor-pointer border  border-gray-400 hover:bg-black hover:text-white hover:border-orange-500 hover:shadow-lg rounded-full px-10 max-w-[170px]"
          >
            <BiArrowBack size={18} className="m-1 hover:text-orange-500" />
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
