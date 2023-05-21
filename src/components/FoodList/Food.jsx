import React from "react";
import FoodCard from "./FoodCard.jsx";
import CategoriesFood from "./CategoriesFood.jsx";
import PriceFood, { sortTitle } from "./PriceFood.jsx";
import SkeletonLoading from "../Skeleton/SkeletonLoading.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryId,
  setFilters,
} from "../../redux/store/Slices/filterSlice.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import qs from "qs";

const Food = ({ searchValue }) => {
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [foodItems, setFoodItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { categoryId, sortType } = useSelector((state) => state.filter);

  const fetchFood = () => {
    setIsLoading(true);
    const baseUrl = "https://64581bc81a4c152cf991b4a5.mockapi.io/card";
    const categoryBy = categoryId > 0 ? `category=${categoryId}` : "";
    const sortTypeBy = sortType.sortProperty.replace("-", "");
    const orderBy = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    axios
      .get(
        `${baseUrl}?${categoryBy}&sortBy=${sortTypeBy}&order=${orderBy}${search}`
      )
      .then((res) => {
        setFoodItems(res.data);
        setIsLoading(false);
      });
  };
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortUrl = sortTitle.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(setFilters({ ...params, sortUrl }));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      fetchFood();
    }
    isSearch.current = false;
  }, [categoryId, sortType.sortProperty, searchValue]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
      }); //?
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType.sortProperty, searchValue]);

  //   Filter Type burgers/pizza/etc
  const filterType = (i) => {
    dispatch(setCategoryId(i));
    // setCategoryId(i);
  };
  //   Filter by price
  // const filterPrice = (obj) => {
  //   setSortType(obj);
  // };
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
        <PriceFood />
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
