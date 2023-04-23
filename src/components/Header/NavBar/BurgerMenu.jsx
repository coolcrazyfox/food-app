import React from "react";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

export const initialState = [
  {
    id: 1,
    link: "/",
    title: "Orders",
    color: "#D73486FF",
    icon: <TbTruckDelivery size={27} />,
  },
  {
    id: 2,
    link: "/blogger",
    title: "Favorites",
    color: "#dbc711",
    icon: <MdFavorite size={27} />,
  },
  {
    id: 3,
    link: "/posts",
    title: "Wallet",
    color: "#6a99ff",
    icon: <FaWallet size={27} />,
  },
  {
    id: 4,
    link: "/users",
    title: "Help",
    color: "#8BB92CFF",
    icon: <MdHelp size={27} />,
  },
  {
    id: 5,
    link: "/registration",
    title: "Promotions",
    color: "#ec8434",
    icon: <AiFillTag size={27} />,
  },
  {
    id: 6,
    link: "/settings",
    title: "Best Ones",
    color: "#793b92",
    icon: <BsFillSaveFill size={27} />,
  },
  {
    id: 7,
    link: "/settings",
    title: "Invite Friends",
    color: "#793b92",
    icon: <FaUserFriends size={27} />,
  },
];

const BurgerMenu = () => {
  return (
    <>
      <ul className="flex flex-col p-4 text-gray-800">
        {initialState.map((c) => (
          <li className="text-xl py-4 flex" key={c.id}>
            <div className="mr-4 flex flex-row">
              {c.icon} <span className="ml-5 pb-3">{c.title}</span>
            </div>
            {/* <TbTruckDelivery size={25} className="mr-4" /> Orders */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerMenu;
