import React from "react";
import FoodSize from "./FoodSize";

const FoodTypeAndSizeBlock = ({
  types,
  sizes,
  activeType,
  setActiveType,
  activeSize,
  setActiveSize,
}) => {
  const typePizza = ["Nothing", "'VOSS' water", "Thin-crust", "Thick-crust"];
  return (
    <>
      <div className="flex justify-between px-2 py-1">
        <ul className="flex flex-row px-1  w-full justify-between ">
          {types.map((t, i) => (
            <li
              onClick={() => setActiveType(i)}
              className={
                activeType === i
                  ? "text-orange-500 text-sm mx-1 border-2 border-orange-500 rounded-md  w-full text-center cursor-pointer"
                  : "text-sm mx-1 rounded-md bg-gray-100  w-full text-center cursor-pointer"
              }
              key={t}
            >
              {typePizza[t]}
            </li>
          ))}
        </ul>
      </div>
      {sizes && (
        <FoodSize
          sizes={sizes}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
        />
      )}
    </>
  );
};

export default FoodTypeAndSizeBlock;
