import React from "react";
import FoodSize from "./FoodSize";
import { useDispatch, useSelector } from "react-redux";
import { setActiveType } from "../../redux/store/Slices/foodSlice";

const FoodTypeAndSizeBlock = ({ types, sizes, activeType, activeSize }) => {
  const typePizza = ["'VOSS' water", "Thin-crust", "Thick-crust"];
  const dispatch = useDispatch();
  const onClickActiveType = (i) => {
    dispatch(setActiveType(i));
  };
  return (
    <>
      <div className="flex justify-between px-2 py-1">
        <ul className="flex flex-row px-1  w-full justify-between ">
          {types.map((t, i) => (
            <li
              onClick={onClickActiveType}
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
      {sizes && <FoodSize sizes={sizes} activeSize={activeSize} />}
    </>
  );
};

export default FoodTypeAndSizeBlock;
