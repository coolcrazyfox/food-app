import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import BurgerMenu from "./BurgerMenu";
import CartButton from "./CartButton";
import Search from "./Search";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={31} className="text-orange-500 mt-1" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Best <span className="font-bold">Eats</span>
        </h1>
        {/* Themes */}
        <ThemeButton isClick={isClick} setIsClick={setIsClick} />
      </div>

      {/* Search Input */}
      <Search />
      {/* Cart button */}
      <CartButton />

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      ) : (
        ""
      )}
      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-bold text-orange-500">Menu</h2>
        <nav>
          <BurgerMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
