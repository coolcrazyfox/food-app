import React from "react";
import FoodTypeAndSizeBlock from "./FoodTypeAndSizeBlock";
import AddFoodItem from "./AddFoodItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/store/Slices/cartSlice";

const FoodCard = ({ id, imageUrl, name, price, types, sizes, rating }) => {
  const theme = useSelector((state) => state.navbar.changeTheme);
  const dispatch = useDispatch();
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [addItemT, setAddItemT] = React.useState(0);
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
    dispatch(addItem(item));
  };

  const onClickAddItemHandler = () => {
    setAddItemT((addItemT) => addItemT + 1);
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
        addItem={addItemT}
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
