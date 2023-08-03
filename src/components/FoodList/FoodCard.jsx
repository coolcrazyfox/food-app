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

      {/* <AddFoodItem
        sizeAndType={sizeAndType}
        setSizeAndType={setSizeAndType}
        name={name}
        price={price}
        types={types}
        rating={rating}
        weight={weight}
        onClickAddItemHandler={onClickAdd}
        count={addedCount}
      /> */}
      <div
        className={
          theme === "dark"
            ? "flex justify-between px-2 py-4"
            : "flex justify-between px-2 py-4 text-white"
        }
      >
        <div className="flex flex-col">
          {/* Title food */}
          <div className="flex  lg:flex-row font-bold sm:flex-col ml-2 mb-1">
            {name}
          </div>
          <div className="flex mx-2 mb-1 text-orange-500 font-bold">
            {weight}g
          </div>
          <div className="flex flex-row w-full ">
            <div className=" flex flex-row select-none  justify-between ">
              {/* Add button */}
              <div
                onClick={onClickAdd}
                className="flex flex-row  mx-2 object-cover select-none border-2  border-orange-500 bg-white text-orange-500 px-2 rounded-full  h-7 cursor-pointer hover:bg-orange-500 hover:text-white "
              >
                <span className="flex max-w-max min-w-min ">Add</span>
                {addedCount > 0 && (
                  <span className="ms-2 w-6  text-center rounded-full bg-white text-orange-500">
                    {addedCount}
                  </span>
                )}
              </div>
              <span className="mr-2 font-normal ">{price}$</span>
              <RiStarSmileFill size={24} className="text-orange-500 ml-1" />
              <span className="text-base px-1 mr-[2px]">{rating}</span>
              {/* Size and Type */}
              <span className=" text-center pt-1 px-2 cursor-pointer hover:text-orange-600">
                <HiOutlineBarsArrowDown
                  onClick={() => setSizeAndType(!sizeAndType)}
                  size={20}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

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
