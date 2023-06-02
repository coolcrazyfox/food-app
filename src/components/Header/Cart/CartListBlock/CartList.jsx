import React from "react";
import CartItem from "./CartItem";
import CartInfoBlock from "./CartInfoBlock/CartInfoBlock";
import { useSelector } from "react-redux";

const CartList = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <>
      {items.map((cart) => (
        <CartItem {...cart} key={cart.id} />
      ))}
      <CartInfoBlock />
    </>
  );
};

export default CartList;
