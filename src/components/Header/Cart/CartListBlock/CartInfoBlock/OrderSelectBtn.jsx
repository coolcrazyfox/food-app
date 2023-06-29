import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PATH } from "../../../../../routes/RouterRoot";
import { useSelector } from "react-redux";

const OrderSelectBtn = () => {
  const theme = useSelector((state) => state.navbar.changeTheme);

  return (
    <div
      className={
        theme === "dark"
          ? "flex flex-row justify-between"
          : "flex flex-row justify-between text-white"
      }
    >
      <Link
        to={PATH.FOOD}
        className="flex flex-row cursor-pointer border  border-gray-400 hover:bg-black hover:text-white hover:border-orange-500 hover:shadow-lg rounded-full px-10"
      >
        <BiArrowBack size={18} className="m-1 hover:text-orange-500" />
        Back
      </Link>
      <div className="cursor-pointer border border-orange-500 rounded-full px-10 hover:shadow-lg hover:bg-orange-500 hover:text-white">
        Pay now
      </div>
    </div>
  );
};

export default OrderSelectBtn;
