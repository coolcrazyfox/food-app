import React from "react";
import FoodBlock from "./FoodBlock";

const FoodCard = ({ food }) => {
  const [addItem, setAddItem] = React.useState(0);
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
      <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{food.name}</p>

        <p className=" flex flex-row select-none">
          price: &nbsp;{food.price}$&nbsp;
          <div
            onClick={onClickAddItemHandler}
            className="select-none border-2  border-orange-500 bg-white text-orange-500 px-2 rounded-full w-15 cursor-pointer hover:bg-orange-500 hover:text-white flex flex-row"
          >
            Add
            {addItem > 0 && (
              <span className="ms-3 w-6  text-center rounded-full bg-white text-orange-500">
                {addItem}
              </span>
            )}
          </div>
        </p>
      </div>
      <FoodBlock
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
