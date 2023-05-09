import React from "react";
import EmptyCart from "../../components/Header/Cart/EmptyCart";
import { HiShoppingCart } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";

const CartPage = () => {
  const state = [
    {
      id: 1,
      name: "Ice Cream Cake",
      category: "dessert",
      imageUrl:
        "https://i0.wp.com/whattheheckdoieatnow.com/wp-content/uploads/2016/03/Ice-Cream-Cake18.jpg?w=1100",
      price: 40,
      rating: 10,
    },
    {
      id: 2,
      name: "Cheese Cake",
      category: "dessert",
      imageUrl:
        "https://img.freepik.com/premium-photo/slice-cheesecake-with-berries-plate_862480-4.jpg",
      price: 20,
      rating: 9,
    },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        Cart
      </h1>
      <HiShoppingCart size={30} />
      {state.map((s) => (
        <div
          key={s.id}
          className="flex flex-row border shadow-lg rounded-lg hover:scale-105 duration-400 my-4  max-w-[800px]"
        >
          <img
            src={s.imageUrl}
            alt={"cart item"}
            className="w-[100px] h-[90px] object-cover rounded-lg "
          />
          <div className="flex flex-col text-lg px-7 my-3 h-auto min-w-[300px] ">
            <h3 className="text-orange-500 font-bold">{s.name}</h3>
            <h2>
              told <span>26cm.</span>
            </h2>
          </div>
          <div className=" flex flex-row justify-between items-center px-5 mx-9 h-auto">
            <span className="flex items-center justify-center mx-2 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center">
              -
            </span>
            <div className="font-bold mx-2">1</div>
            <span className="flex items-center justify-center mx-2 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center">
              +
            </span>
          </div>
          <div className="flex items-center justify-center mx-2 font-bold   min-w-[30px] text-center">
            <p>{s.price}$</p>
          </div>
          <RiCloseCircleLine
            size={24}
            className="flex items-center justify-center ml-20 mt-3 text-gray-400 hover:text-orange-500 font-bold  text-center"
          />
        </div>
      ))}

      <EmptyCart />
    </div>
  );
};

export default CartPage;
