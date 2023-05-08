import React from "react";

const SkeletonLoading = () => {
    const=''
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-400">
        <img
        src={image}
        alt={'skeleton'}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
    </div>
  );
};

export default SkeletonLoading;
