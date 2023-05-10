import React from "react";

import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PATH } from "../../../routes/RouterRoot";
import CartItem from "./CartItem";

const CartList = () => {
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
    <>
      {state.map((cart) => (
        <CartItem {...cart} key={cart.id} />
      ))}
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="my-2">
            All:
            <span className="font-bold text-orange-500 ml-1">3 pcs.</span>
          </h1>
        </div>
        <div>
          <h1 className="my-2">
            Order amount:
            <span className="font-bold text-orange-500 ml-1"> 400$</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Link
          to={PATH.HERO}
          className="flex flex-row cursor-pointer border  border-gray-400 hover:bg-black hover:text-white hover:border-orange-500 hover:shadow-lg rounded-full px-10"
        >
          <BiArrowBack size={18} className="m-1 hover:text-orange-500" />
          Back
        </Link>
        <div className="cursor-pointer border border-orange-500 rounded-full px-10 hover:shadow-lg hover:bg-orange-500 hover:text-white">
          Pay now
        </div>
      </div>
    </>
  );
};

export default CartList;
