import React from "react";

const HeadlineCards = () => {
  const headlineCardState = [
    {
      id: 1,
      title: "NEW Restaurants",
      text: "Added Daily",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/30/f5/ee/caption.jpg",
    },
    {
      id: 2,
      title: "We Deliver Desserts Too",
      text: "Tasty Treats",
      url: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "NEW Seasonal MENU",
      text: "Through 6/21",
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {headlineCardState.map((item) => (
        <div className="rounded-xl relative" key={item.id}>
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{item.title}</p>
            <p className="px-2">{item.text}</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:text-white">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={item.url}
            alt="img"
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
