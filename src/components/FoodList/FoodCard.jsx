import React from "react";
import FoodTypeAndSizeBlock from "./FoodTypeAndSizeBlock";
import AddFoodItem from "./AddFoodItem";
import { useSelector } from "react-redux";

const FoodCard = ({ imageUrl, name }) => {
  const theme = useSelector((state) => state.navbar.changeTheme);
  const [addItem, setAddItem] = React.useState(0);
  const [sizeAndType, setSizeAndType] = React.useState(false);

  const onClickAddItemHandler = () => {
    setAddItem((addItem) => addItem + 1);
  };
  return (
    <div
      className={
        theme
          ? "border shadow-lg rounded-lg hover:scale-105 duration-400"
          : "border border-gray-600 shadow-gray-600 shadow-lg rounded-lg hover:scale-105 duration-400"
      }
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />

      <AddFoodItem
        sizeAndType={sizeAndType}
        setSizeAndType={setSizeAndType}
        name={name}
        price={price}
        types={types}
        rating={rating}
        addItem={addItem}
        onClickAddItemHandler={onClickAddItemHandler}
      />

      {sizeAndType && <FoodTypeAndSizeBlock {...food} />}
    </div>
  );
};

export default FoodCard;
