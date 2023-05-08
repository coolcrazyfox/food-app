import React from "react";

const Category = () => {
  const [categories, setCategories] = React.useState([]);
  const [active, setActive] = React.useState(0);
  const onClickCategoryHandler = (i) => {
    setActive(i);
  };
  // https://64581bc81a4c152cf991b4a5.mockapi.io/category
  React.useEffect(() => {
    fetch("https://64581bc81a4c152cf991b4a5.mockapi.io/category").then((res) =>
      res.json().then((arr) => {
        setCategories(arr);
      })
    );
  });
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
                ? "text-orange-500 border-b-2 border-orange-500 bg-gray-100 rounded-lg p-4 flex justify-between items-center  "
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
