import React from "react";

export const categoriesName = [
  "All",
  "Pizza",
  "Burger",
  "Salad",
  "Chicken",
  "BBQ",
  "JP Food",
  "Dessert",
];

const CategoriesFood = ({ onClickCategoryHandler, value }) => {
  return (
    <>
      {categoriesName.map((btn, i) => (
        <button
          key={btn}
          onClick={() => onClickCategoryHandler(i)}
          className={
            value === i
              ? "m-1 border-orange-600 text-white bg-gray-500 hover:bg-orange-600 hover:text-white"
              : "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white active:bg-gray-400"
          }
        >
          {btn}
        </button>
      ))}
    </>
  );
};

export default CategoriesFood;
