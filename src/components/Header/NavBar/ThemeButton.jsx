import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChangeTheme } from "../../../redux/store/Slices/navBarSlice";
import { BsFillEmojiSunglassesFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const isClick = useSelector((state) => state.navbar.changeTheme);
  const toggleTheme = () => {
    if (isClick === "dark") {
      dispatch(setChangeTheme("light"));
    }
    if (isClick === "light") {
      dispatch(setChangeTheme("dark"));
    }
  };
  return (
    <div
      onClick={() => toggleTheme(isClick)}
      className=" flex  items-center bg-gray-200 rounded-full p-1  cursor-pointer "
    >
      <div
        className={
          isClick === "dark"
            ? "text-black p-2 lg:min-w-4 sm:min-w-1"
            : "bg-orange-600  text-white rounded-full p-2 lg:min-w-4 sm:min-w-1 hover:text-gray-100"
        }
      >
        <BsMoonStarsFill size={15} />
      </div>
      <div
        className={
          isClick === "dark"
            ? "bg-orange-600 text-white rounded-full p-2 lg:min-w-4 sm:min-w-1 hover:text-gray-100"
            : "text-black p-2 lg:min-w-4 sm:min-w-1"
        }
      >
        <BsFillEmojiSunglassesFill size={15} />
      </div>
    </div>
  );
};

export default ThemeButton;
