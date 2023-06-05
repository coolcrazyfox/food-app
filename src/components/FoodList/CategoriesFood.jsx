import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCategory } from "../../redux/store/Slices/filterSlice";

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
  const theme = useSelector((state) => state.navbar.changeTheme);
  const openType = useSelector((state) => state.filter.openCategory);
  const dispatch = useDispatch();
  const sortCategoryName = categoriesName[value];
  const onChangeCategoryHandler = (i) => {
    onClickCategoryHandler(i);
    dispatch(setOpenCategory(false));
  };
  return (
    <div>
      <p
        className={
          theme === "dark" ? "font-bold text-gray-700" : "font-bold text-white"
        }
      >
        Category Filter:
      </p>
      <div className="flex justify-start flex-wrap">
        {openType ? (
          <>
            {categoriesName.map((btn, i) => (
              <button
                key={btn}
                onClick={() => onChangeCategoryHandler(i)}
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
        ) : (
          <button
            className={
              theme === "dark"
                ? "flex m-1 border-orange-600  text-orange-600 hover:bg-orange-600 hover:text-white"
                : "flex m-1 border-orange-600 bg-gray-100 text-orange-600 hover:bg-orange-600 hover:text-white"
            }
            onClick={() => dispatch(setOpenCategory(!openType))}
          >
            {sortCategoryName}
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoriesFood;
