import React from "react";

const AddFoodItem = ({ food, addItem, onClickAddItemHandler }) => {
  return (
    <>
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
    </>
  );
};

export default AddFoodItem;
