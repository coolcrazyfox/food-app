import React from "react";

const HeadlineCards = () => {
  const headlineCardState = [
    {
      id: 1,
      title: "Sun's Out, BOGO's Out",
      text: "Through 8/26",
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "New Restaurants",
      text: "Added Daily",
      url: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "We Deliver Desserts Too",
      text: "Tasty Treats",
      url: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {headlineCardState.map((item) => (
        <div className="rounded-xl relative" key={item.id}>
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{item.title}</p>
            <p className="px-2">{item.text}</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={item.url}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
