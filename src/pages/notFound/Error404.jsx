import React from "react";
import notFound from "../../assets/404.png";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

const Error404 = () => (
  <div className="max-w-[1640px] m-auto px-4 py-12">
    <h1 className="text-center text-2xl">Oops!</h1>
    <div className="flex flex-column object-cover mx-20   justify-center">
      <img
        className="flex object-cover mx-20 items-center px-10"
        src={notFound}
      />
    </div>
    <h1 className="text-center text-orange-500 font-extrabold text-2xl py-5">
      PAGE NOT FOUND
    </h1>
    <div className="flex justify-center items-center">
      <Link
        to="/food-app"
        className="flex justify-center bg-gray-300  w-20 hover:bg-orange-500 border-2 hover:border-orange-500 rounded-md"
      >
        <TiArrowBackOutline className="text-center text-2xl  hover:text-white" />
      </Link>
    </div>
  </div>
);

export default Error404;
