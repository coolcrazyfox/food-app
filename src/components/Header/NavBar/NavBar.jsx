import React from "react";
import ThemeButton from "./ThemeButton";
import { GiFullPizza } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import BurgerMenu from "./BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMenu } from "./../../../redux/store/Slices/navBarSlice";

const NavBar = () => {
  const { openMenu, changeTheme } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const onChangeHandler = () => {
    dispatch(setOpenMenu(true));
  };
  return (
    <>
      <div className="flex items-center">
        <div onClick={onChangeHandler} className="cursor-pointer">
          <GiFullPizza
            size={31}
            className={changeTheme ? "text-orange-500 mt-1" : "text-white mt-1"}
          />
        </div>
        <h1 className="flex flex-row  text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Best
          <span className={changeTheme ? " font-bold" : "font-bold text-white"}>
            Delivery
          </span>
        </h1>
        {/* Themes */}
        <ThemeButton />
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      {openMenu ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      ) : (
        ""
      )}
      {/* Side drawer menu */}
      <div
        className={
          openMenu
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000"
        }
      >
        <AiOutlineClose
          onClick={() => dispatch(setOpenMenu(!openMenu))}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-bold text-orange-500">Menu</h2>
        <div>
          <BurgerMenu />
        </div>
      </div>
    </>
  );
};

export default NavBar;
