import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/store/Slices/filterSlice";

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
  const openType = useSelector((state) => state.filter.open);
  const dispatch = useDispatch();
  // const [openType, setOpenType] = React.useState(false);
  const sortCategoryName = categoriesName[value];
  const onChangeCategoryHandler = (i) => {
    onClickCategoryHandler(i);
    // setOpenType(false);
    dispatch(setOpen(false));
  };
  return (
    <div>
      <p className="font-bold text-gray-700">Category Filter:</p>
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
            className="flex m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            onClick={() => dispatch(setOpen(!openType))}
          >
            {sortCategoryName}
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoriesFood;
