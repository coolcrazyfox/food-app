import React from "react";
import { useSelector } from "react-redux";

const OrderCount = () => {
  const theme = useSelector((state) => state.navbar.changeTheme);

  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="flex flex-row justify-between">
      <div className={theme === "dark" ? "" : "text-white"}>
        <h1 className="my-2">
          All:
          <span className="font-bold text-orange-500 ml-1">
            {totalCount} pcs.
          </span>
        </h1>
      </div>
      <div className={theme === "dark" ? "" : "text-white"}>
        <h1 className="my-2">
          Order amount:
          <span className="font-bold text-orange-500 ml-1">
            {totalPrice}
            <span className="text-[17px]">$</span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default OrderCount;
