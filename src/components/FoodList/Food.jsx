import React, { useState } from "react";
import { data } from "../../data/data.js";
import FoodCard from "./FoodCard.jsx";
import CategoriesFood from "./CategoriesFood.jsx";
import PriceFood from "./PriceFood.jsx";
import SkeletonLoading from "../Skeleton/SkeletonLoading.jsx";

const Food = () => {
  const [foodItems, setFoodItems] = React.useState([]);
  const [categoriesId, setCategoriesId] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [foods, setFoods] = useState(data);
  const [openPrice, setOpenPrice] = React.useState(false);
  const [openType, setOpenType] = React.useState(false);
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
  const [selectedType, setSelectedType] = React.useState(0);

  // https://64581bc81a4c152cf991b4a5.mockapi.io/card
  React.useEffect(() => {
    fetch("https://64581bc81a4c152cf991b4a5.mockapi.io/card")
      .then((res) => res.json())
      .then((arr) => {
        setFoodItems(arr);
        setIsLoading(false);
      });
  }, []);

  //   Filter Type burgers/pizza/etc
  const filterType = (category, i) => {
    setSelectedType(i);
    if (category) {
      setFoods(
        data.filter(
          (item) =>
            item.category === i || item.category === category.toLowerCase()
        )
      );
    }
    if (i === 0) {
      setFoods(data);
    }
    setOpenType(false);
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
            {openType ? (
              <CategoriesFood
                selectedType={selectedType}
                title={categoriesId}
                onClickCategoryHandler={(id) => filterType(id)}
              />
            ) : (
              <button
                className="flex m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                onClick={() => setOpenType(!openType)}
              >
                {titleBtn[selectedType]}
              </button>
            )}
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 text-end w-full mr-1">
            Filter Price:
          </p>
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
                className="flex my-1 ml-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
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
        {isLoading
          ? [...new Array(4)].map((_, i) => <SkeletonLoading key={i} />)
          : foodItems.map((food) => <FoodCard {...food} key={food.id} />)}
      </div>
    </div>
  );
};

export default Food;
