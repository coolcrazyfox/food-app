import React from "react";

const PriceFood = ({ filterPriceHandler, sortValue }) => {
  const sortTitle = [
    { name: "Rating (DESC)", sortProperty: "rating" },
    { name: "Rating (ASC)", sortProperty: "rating" },
    { name: "Price (min)", sortProperty: "price" },
    { name: "Price (max)", sortProperty: "price" },
    { name: "A-Z", sortProperty: "name" },
    { name: "Z-A", sortProperty: "name" },
  ];
  const [openSort, setOpenSort] = React.useState(false);
  const onChangePriceHandler = (obj) => {
    filterPriceHandler(obj);
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
                onClick={() => onChangePriceHandler(obj)}
                className={
                  sortValue.sortProperty === obj.sortProperty
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
            {sortValue.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceFood;
