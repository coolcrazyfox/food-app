import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PriceFood = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sortType);
  const sortTitle = [
    { name: "Rating (min)", sortProperty: "-rating" },
    { name: "Rating (max)", sortProperty: "rating" },
    { name: "Price (min)", sortProperty: "-price" },
    { name: "Price (max)", sortProperty: "price" },
    { name: "A-Z", sortProperty: "-name" },
    { name: "Z-A", sortProperty: "name" },
  ];
  const [openSort, setOpenSort] = React.useState(false);
  const onChangePriceHandler = (obj) => {
    filterPriceHandler(obj);
    setOpenSort(false);
  };
  return (
    <div>
      <p className="font-bold text-gray-700 text-end w-full mr-1">Sort by:</p>
      <div className="flex justify-between max-w-[690px] w-full">
        {openSort ? (
          <>
            {sortTitle.map((obj) => (
              <button
                key={obj}
                onClick={() => onChangePriceHandler(obj)}
                className={
                  sort.sortProperty === obj.sortProperty
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
            {sort.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceFood;
