import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
      <AiOutlineSearch size={25} />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-transparent p-2 w-[180px] sm:w-[370px] lg:w-[450px] focus:outline-none focus:border-1 focus:border-b-[2px] focus:border-orange-500"
        type="text"
        placeholder="Search foods"
      />
      {searchValue && (
        <MdClear
          onClick={() => setSearchValue("")}
          size={20}
          className="hover:text-red-500 text-gray-700"
        />
      )}
    </div>
  );
};

export default Search;
