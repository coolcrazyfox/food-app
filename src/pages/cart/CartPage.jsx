import React from "react";
import EmptyCart from "../../components/Header/Cart/EmptyCart";

import CartList from "./../../components/Header/Cart/CartListBlock/CartList";
import ClearCartBtn from "./../../components/Header/Cart/CartListBlock/ClearCartBtn";

const CartPage = () => {
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
          <CartList />
        </>
      )}
    </div>
  );
};

export default CartPage;
