import React from "react";

const FoodSize = ({ sizes, activeSize, setActiveSize }) => {
  return (
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
            key={s}
          >
            {s}cm.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodSize;
