import React from "react";
import { AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { MdOutlineConnectWithoutContact, MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";

export const initialState = [
  {
    id: 1,
    link: "/",
    title: "Home",
    icon: <GoHome size={27} />,
  },
  {
    id: 2,
    link: "/orders",
    title: "Orders",
    icon: <TbTruckDelivery size={27} />,
  },
  {
    id: 3,
    link: "/card",
    title: "Menubar",
    icon: <MdFastfood size={27} />,
  },
  {
    id: 4,
    link: "/favorites",
    title: "Favorites",
    icon: <MdFavorite size={27} />,
  },
  {
    id: 5,
    link: "/promotions",
    title: "Promotions",
    icon: <AiFillTag size={27} />,
  },
  {
    id: 6,
    link: "/invite_friends",
    title: "Invite Friends",
    icon: <FaUserFriends size={27} />,
  },
  {
    id: 7,
    link: "/help",
    title: "Help",
    icon: <MdHelp size={27} />,
  },
  {
    id: 8,
    link: "/contact",
    title: "Contact",
    icon: <MdOutlineConnectWithoutContact size={27} />,
  },
];

const BurgerMenu = () => {
  return (
    <>
      <ul className="flex flex-col p-4 text-gray-800">
        {initialState.map((c) => (
          <Link to={c.link} key={c.id}>
            <li className="text-xl py-4 flex">
              <div className="mr-4 flex flex-row">
                {c.icon} <span className="ml-5 pb-3">{c.title}</span>
              </div>
              {/* <TbTruckDelivery size={25} className="mr-4" /> Orders */}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default BurgerMenu;
