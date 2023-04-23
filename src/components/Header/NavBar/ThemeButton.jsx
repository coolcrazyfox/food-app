import React from "react";

const ThemeButton = ({ isClick, setIsClick }) => {
  return (
    <div
      className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer "
      onClick={() => setIsClick(!isClick)}
    >
      <p
        className={
          isClick
            ? "text-black p-2 min-w-4"
            : "bg-black text-white rounded-full p-2 min-w-4 hover:bg-orange-600"
        }
      >
        Dark
      </p>{" "}
      <p
        className={
          !isClick
            ? "p-2"
            : "bg-black text-white rounded-full p-2 min-w-4 hover:bg-orange-600"
        }
      >
        Light
      </p>
    </div>
  );
};

export default ThemeButton;
