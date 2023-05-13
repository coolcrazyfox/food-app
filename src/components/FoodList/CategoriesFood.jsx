import React from "react";

const CategoriesFood = ({ filterTypeHandler, selectedType }) => {
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
      {titleBtn.map((b, i) => (
        <button
          onClick={() => filterTypeHandler(i)}
          className={
            selectedType === i
              ? "m-1 border-orange-600 text-white bg-gray-500 hover:bg-orange-600 hover:text-white"
              : "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white active:bg-gray-400"
          }
        >
          {b.title}
        </button>
      ))}
    </>
  );
};

export default CategoriesFood;
