import React from "react";

const EmptyCart = () => {
  return (
    <>
      <div className="flex flex-col justify-between my-10">
        <div className="flex flex-row justify-center items-center w-full">
          <h1 className="text-3xl px-3">Your cart is empty</h1>
          <img src={smiley} alt="smiley" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center my-10">
          <img
            src={empty}
            alt="empty"
            className="flex justify-center  object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
