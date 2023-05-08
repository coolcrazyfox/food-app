import React from "react";
import imageSkeleton from "../../assets/4492606.jpg";

const SkeletonLoading = () => {
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-400">
      <img
        src={imageSkeleton}
        alt={"skeleton"}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
    </div>
  );
};

export default SkeletonLoading;
