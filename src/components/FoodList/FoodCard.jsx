import React from "react";
import FoodTypeAndSizeBlock from "./FoodTypeAndSizeBlock";
import AddFoodItem from "./AddFoodItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/store/Slices/cartSlice";

const FoodCard = ({
  id,
  imageUrl,
  name,
  price,
  types,
  sizes,
  rating,
  category,
}) => {
  const typePizza = ["Thin-crust", "Thick-crust"];
  const theme = useSelector((state) => state.navbar.changeTheme);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [sizeAndType, setSizeAndType] = React.useState(false);
  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      name,
      price,
      rating,
      types: typePizza[activeType],
      sizes: activeSize,
      category,
    };
    dispatch(addItem(item));
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
        onClickAddItemHandler={onClickAdd}
        count={addedCount}
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
