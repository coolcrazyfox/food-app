import React from "react";
import debounce from "lodash.debounce";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../../redux/store/Slices/filterSlice";

const Search = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);
  const inputRef = React.useRef();
  const onClickClearHandler = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((string) => {
      dispatch(setSearchValue(string));
    }, 1000),
    []
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className="flex  bg-gray-200 rounded-full  items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
      <AiOutlineSearch size={25} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="bg-transparent p-2 min-w-[110px] h-auto sm:w-[370px] lg:w-[450px] md:w-[400px] focus:outline-none focus:border-1 focus:border-b-[2px] focus:border-orange-500"
        type="text"
        placeholder="Search foods"
      />
      {searchValue && (
        <MdClear
          onClick={onClickClearHandler}
          size={20}
          className="hover:text-red-500 text-gray-700 "
        />
      )}
    </div>
  );
};

export default Search;
