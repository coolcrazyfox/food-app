import React from "react";
import { categories } from "../../data/data.js";

const Category = () => {
  const [active, setActive] = React.useState(0);
  const onClickCategoryHandler = (i) => {
    setActive(i);
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            onClick={() => onClickCategoryHandler(index)}
            key={index}
            className={
              active === index
                ? "text-red border-blue-300"
                : "bg-gray-100 rounded-lg p-4 flex justify-between items-center"
            }
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.imageUrl} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
