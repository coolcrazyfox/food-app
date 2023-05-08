import React from "react";
import notFound from "../../assets/404.png";
const Error404 = () => {
  return (
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
    </div>
  );
};

export default Error404;
