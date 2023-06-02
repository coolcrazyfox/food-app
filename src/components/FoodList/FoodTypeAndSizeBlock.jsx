import React from "react";

const FoodTypeAndSizeBlock = ({
  types,
  sizes,
  activeType,
  activeSize,
  setActiveSize,
  setActiveType,
}) => {
  const typePizza = ["Thin-crust", "Thick-crust"];
  return (
    <>
      <div className="flex justify-between px-2 py-1">
        <ul className="flex flex-row px-1  w-full justify-between ">
          {types.map((type, i) => (
            <li
              onClick={() => setActiveType(i)}
              className={
                activeType === i
                  ? "text-orange-500 mx-1 border-2 border-orange-500 rounded-md  w-full text-center cursor-pointer"
                  : "mx-1 rounded-md bg-gray-100  w-full text-center cursor-pointer"
              }
              key={type}
            >
              {typePizza[type]}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between px-2 py-1">
        <ul className="flex flex-row px-1  w-full justify-between ">
          {sizes.map((s, i) => (
            <li
              onClick={() => setActiveSize(i)}
              className={
                activeSize === i
                  ? "text-white mx-1 rounded-md bg-orange-500  w-full text-center cursor-pointer"
                  : "mx-1 rounded-md bg-gray-100  w-full text-center cursor-pointer"
              }
              key={i}
            >
              {s}cm.
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FoodTypeAndSizeBlock;
