import React from "react";
import FoodTypeAndSizeBlock from "./FoodTypeAndSizeBlock";
import AddFoodItem from "./AddFoodItem";
import { useDispatch, useSelector } from "react-redux";

const FoodCard = ({ ...food }) => {
  const theme = useSelector((state) => state.navbar.changeTheme);
  // const [addItem, setAddItem] = React.useState(0);
  const dispatch = useDispatch();
  // const [sizeAndType, setSizeAndType] = React.useState(false);
  const openSizeType = useSelector((state) => state.cart.openSizeAndType);

  return (
    <div
      className={
        theme === "dark"
          ? "border shadow-lg rounded-lg hover:scale-105 duration-400"
          : "border border-gray-600 shadow-gray-600 shadow-lg rounded-lg hover:scale-105 duration-400"
      }
    >
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />

      <AddFoodItem
        sizeAndType={sizeAndType}
        setSizeAndType={setSizeAndType}
        food={food}
        addItem={addItem}
        onClickAddItemHandler={onClickAddItemHandler}
      />

      {openSizeType && <FoodTypeAndSizeBlock food={food} />}
    </div>
  );
};

export default FoodCard;
