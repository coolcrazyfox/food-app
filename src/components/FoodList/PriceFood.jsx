import React from "react";
export const priceName = [5, 6, 10, 15, 20, 25, 40];

const PriceFood = ({ filterPriceHandler, priceValue }) => {
  const [openPrice, setOpenPrice] = React.useState(false);
  const sortPriceTitle = priceName[priceValue];
  const onChangePriceHandler = (i, p) => {
    filterPriceHandler(i, p);
    setOpenPrice(false);
  };
  return (
    <div>
      <p className="font-bold text-gray-700 text-end w-full mr-1">
        Filter Price:
      </p>
      <div className="flex justify-between max-w-[690px] w-full">
        {openPrice ? (
          <>
            {priceName.map((pr, index) => (
              <button
                key={index}
                onClick={() => onChangePriceHandler(index, pr)}
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
        ) : (
          <button
            className="flex my-1 ml-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            onClick={() => setOpenPrice(!openPrice)}
          >
            {sortPriceTitle}$
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceFood;
