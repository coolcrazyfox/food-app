import React from "react";

const OrderCount = () => {
  return (
    <>
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
    </>
  );
};

export default OrderCount;
