import React from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";

const FoodCard = ({ food }) => {
  const [addItem, setAddItem] = React.useState(0);
  const onClickAddItemHandler = () => {
    setAddItem((addItem) => addItem + 1);
  };
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-400">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{food.name}</p>

        <p className="mr-2 flex flex-row">
          price: &nbsp;{food.price}$&nbsp;
          <span
            onClick={onClickAddItemHandler}
            className="bg-orange-500 text-white py-1 px-2 rounded-full w-15 cursor-pointer hover:bg-black flex flex-row"
          >
            <BsDatabaseFillAdd size={21} />
            {addItem > 0 && <span className="ps-6">{addItem}</span>}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
