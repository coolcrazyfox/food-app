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
  const contactImage =
    "https://thumbs.dreamstime.com/b/buffet-eating-choice-dining-food-party-people-concept-85879860.jpg";
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Contact Information
      </h1>
      <div className="flex justify-center h-auto w-2xl flex-wrap items-center my-4 ">
        <img
          src={contactImage}
          className="flex justify-center rounded-md flex-wrap items-center "
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {contacts.map((contact) => (
          <Link
            to={contact.link}
            key={contact.id}
            className="bg-gray-100 rounded-lg p-4 flex text-center justify-center items-center cursor-pointer"
          >
            <h2 className="font-bold sm:text-xl">{contact.title}</h2>
            <span className="ml-5 w-20">{contact.icon}</span>
          </Link>
        ))}
      </div>
      <p className="text-center">2023 Andrei Malets </p>
    </div>
  );
};

export default Contact;
