import React from "react";
import { AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaSignInAlt } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { HiOutlineLogin } from "react-icons/hi";
import { MdOutlineConnectWithoutContact, MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
import { PATH } from "../../../routes/RouterRoot";
import { useSelector } from "react-redux";

export const initialState = [
  {
    id: 1,
    link: PATH.HERO,
    title: "Home",
    icon: <GoHome size={27} />,
  },
  {
    id: 2,
    link: PATH.FOOD,
    title: "Menubar",
    icon: <MdFastfood size={27} />,
  },
  {
    id: 3,
    link: PATH.ORDERS,
    title: "Orders",
    icon: <TbTruckDelivery size={27} />,
  },
  {
    id: 4,
    link: PATH.FAVORITES,
    title: "Favorites",
    icon: <MdFavorite size={27} />,
  },
  {
    id: 5,
    link: PATH.PROMOTIONS,
    title: "Promotions",
    icon: <AiFillTag size={27} />,
  },
  {
    id: 6,
    link: PATH.ADD_FRIENDS,
    title: "Invite Friends",
    icon: <FaUserFriends size={27} />,
  },
  {
    id: 7,
    link: PATH.HELP,
    title: "Help",
    icon: <MdHelp size={27} />,
  },
  {
    id: 8,
    link: PATH.CONTACT,
    title: "Contact",
    icon: <MdOutlineConnectWithoutContact size={27} />,
  },
  {
    id: 9,
    link: PATH.CONTACT,
    title: "SignIn",
    icon: <FaSignInAlt size={27} />,
  },
  {
    id: 10,
    link: PATH.CONTACT,
    title: "LogIn",
    icon: <HiOutlineLogin size={27} />,
  },
];

const BurgerMenu = () => {
  const theme = useSelector((state) => state.navbar.changeTheme);
  return (
    <>
      <ul
        className={
          theme === "dark"
            ? "flex flex-col p-4 text-gray-800"
            : "flex flex-col p-4 bg-gray-800 text-white"
        }
      >
        {initialState.map((c) => (
          <Link to={c.link} key={c.id}>
            <li className="text-xl py-4 flex">
              <div className="mr-4 flex flex-row">
                {c.icon} <span className="ml-5 pb-3">{c.title}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default BurgerMenu;
