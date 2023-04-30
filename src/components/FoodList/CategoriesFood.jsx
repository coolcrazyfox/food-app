import React from "react";

const CategoriesFood = ({ i, title, filterTypeHandler, selectedType }) => {
  const index = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <button
      onClick={filterTypeHandler}
      className={
        selectedType === i
          ? "m-1 border-orange-600 text-white bg-gray-500 hover:bg-orange-600 hover:text-white"
          : "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white active:bg-gray-400"
      }
    >
      {title}
    </button>
  );
};

export default CategoriesFood;
