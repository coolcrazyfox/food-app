import React from "react";
import EmptyCart from "../../components/Header/Cart/EmptyCart";

import { RiCloseCircleLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PATH } from "../../routes/RouterRoot";
import ClearCartBtn from "../../components/Header/Cart/ClearCartBtn";

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
  const [isEmpty, setIsEmpty] = React.useState(true);
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1
        onClick={() => setIsEmpty(!isEmpty)}
        className="text-orange-600 font-bold text-4xl text-center my-9"
      >
        Cart
      </h1>
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <ClearCartBtn />
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
                <span
                  onClick={() => {}}
                  className="flex items-center justify-center mx-2 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500  hover:shadow-lg "
                >
                  -
                </span>
                <div className="font-bold mx-2">1</div>
                <span
                  onClick={() => {}}
                  className="flex items-center justify-center mx-2 font-bold  border border-orange-500 rounded-lg min-w-[30px] text-center hover:text-white hover:bg-orange-500 hover:shadow-lg "
                >
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
      )}
    </div>
  );
};

export default CartPage;
