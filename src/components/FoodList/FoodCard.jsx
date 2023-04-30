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
      {food.types && (
        <div className="flex justify-between px-2 py-1">
          <ul className="flex flex-row px-1  w-full justify-between ">
            {typePizza.map((t, i) => (
              <li
                onClick={() => setActiveType(i)}
                className={
                  activeType === i
                    ? "text-orange-500 mx-1 border-2 border-orange-500 rounded-md  w-full text-center cursor-pointer"
                    : "mx-1 rounded-md bg-gray-100  w-full text-center cursor-pointer"
                }
                key={i}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}
      {food.sizes && (
        <div className="flex justify-between px-2 py-1">
          <ul className="flex flex-row px-1  w-full justify-between ">
            {sizePizza.map((s, i) => (
              <li
                onClick={() => setActiveSize(i)}
                className={
                  activeSize === i
                    ? "text-white mx-1 rounded-md bg-orange-500  w-full text-center cursor-pointer"
                    : "mx-1 rounded-md bg-gray-100  w-full text-center cursor-pointer"
                }
                key={i}
              >
                {s}cm.
              </li>
            ))}
          </ul>
        </div>
      )}
      <FoodBlock
        food={food}
        activeSize={activeSize}
        setActiveSize={setActiveSize}
        activeType={setActiveType}
        setActiveType={setActiveType}
      />
    </div>
  );
};

export default FoodCard;
