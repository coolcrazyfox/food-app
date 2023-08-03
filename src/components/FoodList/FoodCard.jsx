import React from "react";
import FoodTypeAndSizeBlock from "./FoodTypeAndSizeBlock";
import AddFoodItem from "./AddFoodItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/store/Slices/cartSlice";
import { RiStarSmileFill } from "react-icons/ri";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";

const FoodCard = ({
  id,
  imageUrl,
  name,
  price,
  types,
  sizes,
  rating,
  weight,
  ingredients,
  // category,
}) => {
  const typePizza = ["NOTHING", "'VOSS' water", "Thin-crust", "Thick-crust"];
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
      ingredients,
      price,
      rating,
      weight,
      type: typePizza[activeType],
      size: sizes[activeSize],
      // category,
    };
    dispatch(addItem(item));
  };
  return (
    <div
      className={
        theme
          ? "border border-gray-400 shadow-gray-300  shadow-md rounded-lg hover:scale-105 duration-400"
          : "border border-gray-600 shadow-gray-600 shadow-lg rounded-lg hover:scale-105 duration-400"
      }
    >
      <img
        src={imageUrl}
        alt={name}
        className="lg:w-full h-[300px] md:w-screen object-cover rounded-t-lg"
      />

      <AddFoodItem
        sizeAndType={sizeAndType}
        setSizeAndType={setSizeAndType}
        name={name}
        price={price}
        rating={rating}
        weight={weight}
        onClickAdd={onClickAdd}
        addedCount={addedCount}
      />

      {sizeAndType && (
        <>
          <FoodTypeAndSizeBlock
            types={types}
            activeType={activeType}
            sizes={sizes}
            activeSize={activeSize}
            setActiveType={setActiveType}
            setActiveSize={setActiveSize}
          />
        </>
      )}
    </div>
  );
};

export default FoodCard;
