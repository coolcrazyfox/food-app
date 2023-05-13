import React from "react";
// export const priceName = [5, 6, 10, 15, 20, 25, 40];

const PriceFood = ({ filterPriceHandler, priceValue }) => {
  const sortTitle = [
    { name: "Rating", sortProperty: "rating" },
    { name: "Price", sortProperty: "price" },
    { name: "A-Z", sortProperty: "name" },
  ];
  const [openSort, setOpenSort] = React.useState(false);
  const sortPriceTitle = sortTitle[priceValue].name;
  const onChangePriceHandler = (i) => {
    filterPriceHandler(i);
    setOpenSort(false);
  };
  return (
    <div>
      <p className="font-bold text-gray-700 text-end w-full mr-1">
        Filter Price:
      </p>
      <div className="flex justify-between max-w-[690px] w-full">
        {openSort ? (
          <>
            {sortTitle.map((obj, index) => (
              <button
                key={obj}
                onClick={() => onChangePriceHandler(index)}
                className={
                  priceValue === index
                    ? "m-1 border-orange-600 text-white bg-gray-500 hover:bg-orange-600 hover:text-white"
                    : "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                }
              >
                {obj.name}
              </button>
            ))}
          </>
        ) : (
          <button
            className="flex my-1 ml-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            onClick={() => setOpenSort(!openSort)}
          >
            {sortPriceTitle}
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceFood;
