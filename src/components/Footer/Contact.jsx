import React from "react";

const contacts = [
  { id: 1, link: "", title: "Instagram", icon: "</>" },
  { id: 2, link: "", title: "Telegram", icon: "</>" },
  { id: 3, link: "", title: "LinkedIn", icon: "</>" },
  { id: 4, link: "", title: "GitHub", icon: "</>" },
];
const Contact = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Contact Information
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {contacts.map((c, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{c.title}</h2>
            <div className="w-20">{c.icon}</div>
          </div>
        ))}
      </div>
      <p>@2023 all </p>
    </div>
  );
};

export default Contact;
