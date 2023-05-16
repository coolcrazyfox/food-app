import React from "react";
import FoodTypeAndSizeBlock from "./FoodTypeAndSizeBlock";
import AddFoodItem from "./AddFoodItem";

const FoodCard = ({ ...food }) => {
  const [addItem, setAddItem] = React.useState(0);
  const [sizeAndType, setSizeAndType] = React.useState(true);
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typePizza = ["Thin-crust", "Thick-crust"];
  const sizePizza = [26, 30, 40];
  const onClickAddItemHandler = () => {
    setAddItem((addItem) => addItem + 1);
  };
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-400">
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

      <FoodTypeAndSizeBlock
        food={food}
        activeSize={activeSize}
        setActiveSize={setActiveSize}
        activeType={activeType}
        setActiveType={setActiveType}
        sizePizza={sizePizza}
        typePizza={typePizza}
      />
    </div>
  );
};

export default FoodCard;
