import React from "react";

const FoodBlock = ({
  food,
  activeSize,
  activeType,
  setActiveSize,
  setActiveType,
  sizePizza,
  typePizza,
}) => {
  return (
    <>
      {food.types && (
        <div className="flex justify-between px-2 py-1">
          <ul className="flex flex-row px-1  w-full justify-between ">
            {typePizza.map((t, i) => (
              <li
                onClick={() => setActiveType(i)}
                className={
                  activeType === i
                    ? "text-orange-500 mx-1 border-2 border-orange-500 rounded-md  w-full text-center cursor-pointer"
                    : "mx-1 rounded-md bg-gray-100  w-full text-center cursor-pointer"
                }
                key={i}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}
      {food.sizes && (
        <div className="flex justify-between px-2 py-1">
          <ul className="flex flex-row px-1  w-full justify-between ">
            {sizePizza.map((s, i) => (
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
      )}
    </>
  );
};

export default FoodBlock;