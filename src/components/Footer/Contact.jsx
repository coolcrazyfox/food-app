import React from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const contacts = [
  {
    id: 1,
    link: "https://www.instagram.com/andreimalets777/",
    title: "Instagram",
    icon: <SiInstagram size={25} />,
  },
  {
    id: 2,
    link: "https://t.me/Andrei_Malets",
    title: "Telegram",
    icon: <FaTelegram size={25} />,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/andrei-malets-072827210/",
    title: "LinkedIn",
    icon: <SiLinkedin size={25} />,
  },
  {
    id: 4,
    link: "https://github.com/coolcrazyfox",
    title: "GitHub",
    icon: <FaGithub size={25} />,
  },
];
const Contact = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Contact Information
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {contacts.map((c, index) => (
          <Link
            to={c.link}
            key={c.id}
            className="bg-gray-100 rounded-lg p-4 flex text-center justify-center items-center cursor-pointer"
          >
            <h2 className="font-bold sm:text-xl">{c.title}</h2>
            <span className="ml-5 w-20">{c.icon}</span>
          </Link>
        ))}
      </div>
      <p className="text-center">2023 Andrei Malets </p>
    </div>
  );
};

export default Contact;
