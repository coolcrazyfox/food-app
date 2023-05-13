import React from "react";

const CategoriesFood = ({ onClickCategoryHandler, value }) => {
  const titleBtn = [
    "All",
    "Pizza",
    "Burger",
    "Salad",
    "Chicken",
    "Dessert",
    "BBQ",
    "JpFood",
  ];
  return (
    <>
      {titleBtn.map((btn, i) => (
        <button
          key={i}
          onClick={() => onClickCategoryHandler(btn, i)}
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
