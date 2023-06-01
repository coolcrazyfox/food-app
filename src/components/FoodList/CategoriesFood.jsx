import React from "react";
import { useSelector } from "react-redux";

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
  const [openType, setOpenType] = React.useState(false);
  const sortCategoryName = categoriesName[value];
  const onChangeCategoryHandler = (i) => {
    onClickCategoryHandler(i);
    setOpenType(false);
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
      <div className="flex justify-between flex-wrap">
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
            onClick={() => setOpenType(!openType)}
          >
            {sortCategoryName}
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoriesFood;
