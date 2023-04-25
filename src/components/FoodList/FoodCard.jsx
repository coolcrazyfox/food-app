import React from "react";

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
    </div>
  );
};

export default FoodCard;
