import React from "react";
import { useDispatch } from "react-redux";
import { setActiveSize } from "../../redux/store/Slices/foodSlice";

const FoodSize = ({ sizes, activeSize }) => {
  const dispatch = useDispatch();

  const onClickActiveSize = (i) => {
    dispatch(setActiveSize(i));
  };
  return (
    <div className="flex justify-between px-2 py-1">
      <ul className="flex flex-row px-1  w-full justify-between ">
        {sizes.map((s, i) => (
          <li
            onClick={(i) => dispatch(setActiveSize(i))}
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
  );
};

export default FoodSize;
