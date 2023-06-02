import React from "react";
import FoodTypeAndSizeBlock from "./FoodTypeAndSizeBlock";
import AddFoodItem from "./AddFoodItem";
import { useDispatch, useSelector } from "react-redux";

const FoodCard = ({ id, imageUrl, name, price, types, rating }) => {
  const theme = useSelector((state) => state.navbar.changeTheme);
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.cart);
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [addItem, setAddItem] = React.useState(0);
  const [sizeAndType, setSizeAndType] = React.useState(false);
  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      name,
      price,
      rating,
      types: activeType,
      sizes: activeSize,
      // category,
    };
  };

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

      {sizeAndType && (
        <FoodTypeAndSizeBlock
          types={types}
          sizes={sizes}
          activeType={activeType}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          setActiveType={setActiveType}
        />
      )}
    </div>
  );
};

export default FoodCard;
