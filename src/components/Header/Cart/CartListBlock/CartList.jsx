import React from "react";
import CartItem from "./CartItem";
import CartInfoBlock from "./CartInfoBlock/CartInfoBlock";

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
      <CartInfoBlock />
    </>
  );
};

export default CartList;
