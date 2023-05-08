import React from "react";
import notFound from "../../assets/404.png";
const Error404 = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-center text-lg">Oops!</h1>
      <div className="flex flex-column object-cover mx-20  bg-gray-500 p-10 justify-center">
        <img
          className="flex object-cover mx-20 items-center px-10"
          src={notFound}
        />
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  );
};

export default Error404;
