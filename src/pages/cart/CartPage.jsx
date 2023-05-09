import React from "react";

import EmptyCart from "../../components/Header/Cart/EmptyCart";

const CartPage = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        Cart
      </h1>
      <EmptyCart />
    </div>
  );
};

export default CartPage;
