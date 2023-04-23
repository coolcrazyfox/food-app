import React, { useState } from "react";
import { data } from "../../data/data.js";
import FoodCard from "./FoodCard.jsx";

const Food = () => {
  const [foods, setFoods] = useState(data);
  const titleBtn = [
    "All",
    "Burger",
    "Pizza",
    "Salad",
    "Chicken",
    "Dessert",
    "BBQ",
    "JpFood",
  ];
  const price = ["5", "6", "10", "15", "20", "25", "40"];

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    if (category) {
      setFoods(data.filter((item) => item.category === category.toLowerCase()));
    }
    if (category === "All") {
      setFoods(data);
    }
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type:</p>
          <div className="flex justify-between flex-wrap">
            {titleBtn.map((b, index) => (
              <button
                key={index}
                onClick={() => filterType(b)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price:</p>
          <div className="flex justify-between max-w-[690px] w-full">
            {price.map((p) => (
              <button
                key={p}
                onClick={() => filterPrice(p)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                {p}$
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <FoodCard food={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default Food;
