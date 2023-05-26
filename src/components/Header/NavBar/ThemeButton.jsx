import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChangeTheme } from "../../../redux/store/Slices/navBarSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const isClick = useSelector((state) => state.navbar.changeTheme);
  console.log("theme", isClick);
  return (
    <div
      onClick={() => dispatch(setChangeTheme(!isClick))}
      className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer "
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
