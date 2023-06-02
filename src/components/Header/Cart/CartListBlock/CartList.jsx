import React from "react";
import CartItem from "./CartItem";
import CartInfoBlock from "./CartInfoBlock/CartInfoBlock";
import { useDispatch, useSelector } from "react-redux";

const CartList = ({ id, name, category, imageUrl, price, rating, type }) => {
  const dispatch = useDispatch();
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
