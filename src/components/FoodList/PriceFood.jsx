import React from "react";

const PriceFood = ({ pr, filterPriceHandler }) => {
  return (
    <button
      onClick={filterPriceHandler}
      className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
    >
      {pr}$
    </button>
  );
};

export default PriceFood;
