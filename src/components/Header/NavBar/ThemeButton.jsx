import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChangeTheme } from "../../../redux/store/Slices/navBarSlice";
import {BsFillEmojiSunglassesFill, BsMoonStarsFill} from "react-icons/bs";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const isClick = useSelector((state) => state.navbar.changeTheme);
  console.log("theme", isClick);
  return (
    <div
      onClick={() => dispatch(setChangeTheme(!isClick))}
      className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer "
    >
      <div
        className={
          isClick
            ? "text-black p-2 min-w-4"
            : "bg-orange-600  text-white rounded-full p-2 min-w-4 hover:text-gray-100"
        }
      >
        <BsMoonStarsFill size={19}l/>

      </div>{" "}
      <div
        className={
          !isClick
            ? "text-black p-2 min-w-4"
            : "bg-orange-600 text-white rounded-full p-2 min-w-4 hover:text-gray-100"
        }
      >
        <BsFillEmojiSunglassesFill size={19}/>
      </div>
    </div>
  );
};

export default ThemeButton;
