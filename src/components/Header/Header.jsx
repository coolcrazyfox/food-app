import React, { useState } from "react";

import CartButton from "./Cart/CartButton";
import Search from "./SearchForm/Search";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <NavBar
        nav={nav}
        setNav={setNav}
        isClick={isClick}
        setIsClick={setIsClick}
      />
      {/* Search Input */}
      <Search />
      {/* Cart button */}
      <CartButton />
    </div>
  );
};

export default Header;
