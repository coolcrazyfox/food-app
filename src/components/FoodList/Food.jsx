import React, { useState } from "react";
import { data } from "../../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);
  const titleBtn = ["All", "Burger", "Pizza", "Salad", "Chicken"];
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
          <div className="flex justfiy-between flex-wrap">
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
            {price.map((p, index) => (
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
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
