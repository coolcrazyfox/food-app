import React from "react";
import EmptyCart from "../../components/Header/Cart/EmptyCart";
import { HiShoppingCart } from "react-icons/hi";

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
          className="border shadow-lg rounded-lg hover:scale-105 duration-400 my-4 flex max-w-[800px]"
        >
          <img
            src={s.imageUrl}
            alt={"cart item"}
            className="w-[100px] h-[90px] object-cover rounded-lg "
          />
          <div className="text-lg px-5">
            <h3 className="text-orange-500 font-bold">{s.name}</h3>
            <p>told</p>

            <p>{s.price}$</p>
          </div>
        </div>
      ))}

      <EmptyCart />
    </div>
  );
};

export default CartPage;
