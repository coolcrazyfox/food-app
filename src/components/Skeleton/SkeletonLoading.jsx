import React from "react";
import imageSkeleton from "../../assets/44119.jpg";

const SkeletonLoading = () => {
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-400">
      <img
        src={imageSkeleton}
        alt={"skeleton"}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4">
        <div className="flex flex-row font-bold  ">
          <div className="px-2 flex flex-row ">
            <div className=" h-10" />
            <span className="text-base px-1 h-10"></span>
          </div>
        </div>

        <div className=" flex flex-row select-none">
          <div className="select-none flex flex-row"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
