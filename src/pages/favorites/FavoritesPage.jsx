import React from "react";
import Category from "./Category";

const FavoritesPage = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        Favorites
      </h1>
      <Category />
    </div>
  );
};

export default FavoritesPage;
