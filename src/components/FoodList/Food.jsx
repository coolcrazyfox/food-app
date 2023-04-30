import React, { useState } from "react";
import { data } from "../../data/data.js";
import FoodCard from "./FoodCard.jsx";
import CategoriesFood from "./CategoriesFood.jsx";
import PriceFood from "./PriceFood.jsx";

const Food = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [foods, setFoods] = useState(data);
  const [openPrice, setOpenPrice] = React.useState(false);
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
  const price = [5, 6, 10, 15, 20, 25, 40];
  const [selected, setSelected] = React.useState(0);

  //   Filter Type burgers/pizza/etc
  const filterType = (category, i) => {
    setActiveIndex(i);
    if (category) {
      setFoods(data.filter((item) => item.category === category.toLowerCase()));
    }
    if (category === "All") {
      setFoods(data);
    }
  };

  //   Filter by price
  const filterPrice = (price, i) => {
    setSelected(i);
    setFoods(data.filter((item) => item.price === price));
    setOpenPrice(false);
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Menu</h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type:</p>
          <div className="flex justify-between flex-wrap">
            {titleBtn.map((b, index) => (
              <CategoriesFood
                activeIndex={index}
                title={b}
                key={index}
                filterTypeHandler={() => filterType(b, index)}
              />
            ))}
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price:</p>
          <div className="flex justify-between max-w-[690px] w-full">
            {openPrice ? (
              <>
                {price.map((p, i) => (
                  <PriceFood
                    index={i}
                    selected={selected}
                    pr={p}
                    key={p}
                    filterPriceHandler={() => filterPrice(p, i)}
                  />
                ))}
              </>
            ) : (
              <button
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                onClick={() => setOpenPrice(!openPrice)}
              >
                {price[selected]}$
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food) => (
          <FoodCard {...food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default Food;
