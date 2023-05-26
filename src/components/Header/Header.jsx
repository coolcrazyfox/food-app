import React, { useState } from "react";

import CartButton from "./Cart/CartButton";
import Search from "./SearchForm/Search";
import NavBar from "./NavBar/NavBar";
import { useSelector } from "react-redux";

const Header = ({ searchValue, setSearchValue }) => {
  const theme = useSelector((state) => state.navbar.changeTheme);

  return (
    <div
      className={
        theme
          ? "bg-gray-500 max-w-[1640px] rounded-full mx-auto flex justify-between items-center p-4"
          : "max-w-[1640px] mx-auto flex justify-between items-center p-4"
      }
    >
      {/* Left side */}
      <NavBar />
      {/* Search Input */}
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* Cart button */}
      <CartButton />
    </div>
  );
};

export default Header;
