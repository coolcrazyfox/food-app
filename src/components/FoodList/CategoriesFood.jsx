import React from "react";

const CategoriesFood = ({ title, filterTypeHandler }) => {
  return (
    <button
      onClick={filterTypeHandler}
      className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white active:bg-gray-400"
    >
      {title}
    </button>
  );
};

export default CategoriesFood;
