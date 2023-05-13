import React from "react";
export const priceName = [5, 6, 10, 15, 20, 25, 40];

const PriceFood = ({ filterPriceHandler, priceValue }) => {
  return (
    <>
      {priceName.map((pr, index) => (
        <button
          key={index}
          onClick={() => filterPriceHandler(pr, index)}
          className={
            priceValue === index
              ? "m-1 border-orange-600 text-white bg-gray-500 hover:bg-orange-600 hover:text-white"
              : "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          }
        >
          {pr}$
        </button>
      ))}
    </>
  );
};

export default PriceFood;
