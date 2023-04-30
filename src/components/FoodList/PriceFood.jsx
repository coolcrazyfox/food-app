import React from "react";

const PriceFood = ({ pr, filterPriceHandler, selected, index }) => {
  return (
    <button
      onClick={filterPriceHandler}
      className={
        selected === index
          ? "m-1 border-orange-600 text-white bg-gray-500 hover:bg-orange-600 hover:text-white"
          : "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
      }
    >
      {pr}$
    </button>
  );
};

export default PriceFood;
