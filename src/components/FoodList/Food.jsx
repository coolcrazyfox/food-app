import React, { useState } from "react";
import { data } from "../../data/data.js";
import FoodCard from "./FoodCard.jsx";
import CategoriesFood from "./CategoriesFood.jsx";
import PriceFood from "./PriceFood.jsx";
import SkeletonLoading from "../Skeleton/SkeletonLoading.jsx";

const Food = () => {
  const [foodItems, setFoodItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [foods, setFoods] = useState(data);

  const [priceId, setPriceId] = React.useState(0);
  const [categoriesId, setCategoriesId] = React.useState(0);
  // https://64581bc81a4c152cf991b4a5.mockapi.io/card
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://64581bc81a4c152cf991b4a5.mockapi.io/card?category=" +
        categoriesId
    )
      .then((res) => res.json())
      .then((arr) => {
        setFoodItems(arr);
        setIsLoading(false);
      });
  }, [categoriesId]);
  //   Filter Type burgers/pizza/etc
  const filterType = (i) => {
    setCategoriesId(i);
    // if (category) {
    //   setFoods(
    //     data.filter(
    //       (item) =>
    //         item.category === i || item.category === category.toLowerCase()
    //     )
    //   );
    // }
    // if (i === 0) {
    //   setFoods(data);
    // }
    // setOpenType(false);
  };
  //   Filter by price
  const filterPrice = (i) => {
    setPriceId(i);
    // setFoods(data.filter((item) => item.price === i));
    // setOpenPrice(false);
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Menu</h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <CategoriesFood
          value={categoriesId}
          onClickCategoryHandler={(id) => filterType(id)}
        />

        {/* Filter Price */}

        <PriceFood
          priceValue={priceId}
          filterPriceHandler={(id) => filterPrice(id)}
        />
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
