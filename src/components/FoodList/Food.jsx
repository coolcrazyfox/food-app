import React from "react";
import FoodCard from "./FoodCard.jsx";
import CategoriesFood from "./CategoriesFood.jsx";
import PriceFood from "./PriceFood.jsx";
import SkeletonLoading from "../Skeleton/SkeletonLoading.jsx";
import PaginationFood from "../Pagination/PaginationFood.jsx";

const Food = ({ searchValue }) => {
  const [foodItems, setFoodItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({
    name: "Rating (min)",
    sortProperty: "-rating",
  });
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    const baseUrl = "https://64581bc81a4c152cf991b4a5.mockapi.io/card";
    const categoryBy = categoryId > 0 ? `category=${categoryId}` : "";
    const sortTypeBy = sortType.sortProperty.replace("-", "");
    const orderBy = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    fetch(
      `${baseUrl}?${categoryBy}&sortBy=${sortTypeBy}&order=${orderBy}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setFoodItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue]);
  //   Filter Type burgers/pizza/etc
  const filterType = (i) => {
    setCategoryId(i);
  };
  //   Filter by price
  const filterPrice = (obj) => {
    setSortType(obj);
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Menu</h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <CategoriesFood
          value={categoryId}
          onClickCategoryHandler={filterType}
        />
        {/* Filter Price */}
        <PriceFood sortValue={sortType} filterPriceHandler={filterPrice} />
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {isLoading
          ? [...new Array(4)].map((_, i) => <SkeletonLoading key={i} />)
          : foodItems.map((food) => <FoodCard {...food} key={food.id} />)}
      </div>
      <div>
        <PaginationFood />
      </div>
    </div>
  );
};

export default Food;
