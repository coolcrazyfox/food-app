import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort, setOpenSort } from "../../redux/store/Slices/filterSlice";

export const sortTitle = [
  { id: 1, name: "Rating (min)", sortProperty: "-rating" },
  { id: 2, name: "Rating (max)", sortProperty: "rating" },
  { id: 3, name: "Price (min)", sortProperty: "-price" },
  { id: 4, name: "Price (max)", sortProperty: "price" },
  { id: 5, name: "A-Z", sortProperty: "-name" },
  { id: 6, name: "Z-A", sortProperty: "name" },
];

const SortFood = React.memo(() => {
  const theme = useSelector((state) => state.navbar.changeTheme);
  const dispatch = useDispatch();
  const sortRef = React.useRef(null);
  const { openSort, sortType } = useSelector((state) => state.filter);

  // const [openSort, setOpenSort] = React.useState(false);
  const onChangePriceHandler = (obj, openSort) => {
    // filterPriceHandler(obj);
    dispatch(setSort(obj));
    dispatch(setOpenSort("isClose"));
  };
  const onClickTest = (openSort) => {
    if (openSort === "isOpen") {
      dispatch(setOpenSort("isClose"));
    }
    if (openSort === "isClose") {
      dispatch(setOpenSort("isOpen"));
    }
  };
  return (
    <div>
      <p
        className={
          theme === "dark"
            ? "font-bold text-gray-700 text-end w-full mr-1"
            : "font-bold text-white text-end w-full mr-1"
        }
      >
        Sort by:
      </p>
      <div className="flex justify-between max-w-[690px] w-full">
        {openSort === "isOpen" ? (
          <>
            {sortTitle.map((obj) => (
              <button
                key={obj.id}
                onClick={() => onChangePriceHandler(obj)}
                className={
                  sortType.sortProperty === obj.sortProperty
                    ? "m-1 border-orange-600 text-white bg-gray-500 hover:bg-orange-600 hover:text-white"
                    : "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                }
              >
                {obj.name}
              </button>
            ))}
          </>
        ) : (
          <button
            className={
              theme === "light"
                ? "flex my-1 ml-4 border-orange-600 bg-gray-100 text-orange-600 hover:bg-orange-600 hover:text-white"
                : "flex my-1 ml-4 border-orange-600  text-orange-600 hover:bg-orange-600 hover:text-white"
            }
            onClick={(e) => onClickTest(e)}
          >
            {sortType.name}
          </button>
        )}
      </div>
    </div>
  );
});

export default SortFood;
