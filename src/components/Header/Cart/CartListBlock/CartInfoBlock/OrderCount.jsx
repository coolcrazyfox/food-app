import React from "react";
import { useSelector } from "react-redux";

const OrderCount = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="flex flex-row justify-between">
      <div>
        <h1 className="my-2">
          All:
          <span className="font-bold text-orange-500 ml-1">
            {totalCount} pcs.
          </span>
        </h1>
      </div>
      <div>
        <h1 className="my-2">
          Order amount:
          <span className="font-bold text-orange-500 ml-1">{totalPrice} $</span>
        </h1>
      </div>
    </div>
  );
};

export default OrderCount;
