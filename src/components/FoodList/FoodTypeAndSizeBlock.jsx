import React from "react";

const FoodTypeAndSizeBlock = ({
  type,
  size,
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
          {type.map((t, i) => (
            <li
              onClick={() => setActiveType(i)}
              className={
                activeType === i
                  ? "text-orange-500 mx-1 border-2 border-orange-500 rounded-md  w-full text-center cursor-pointer"
                  : "mx-1 rounded-md bg-gray-100  w-full text-center cursor-pointer"
              }
              key={t}
            >
              {typePizza[t]}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between px-2 py-1">
        <ul className="flex flex-row px-1  w-full justify-between ">
          {size.map((s, i) => (
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
