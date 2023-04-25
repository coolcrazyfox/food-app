import React from "react";

const CategoriesFood = ({ title, filterTypeHandel }) => {
  return (
    <button
      onClick={filterTypeHandel}
      className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
    >
      {title}
    </button>
  );
};

export default CategoriesFood;
