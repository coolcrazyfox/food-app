import React from "react";
import debounce from "lodash.debounce";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../../redux/store/Slices/filterSlice";

const Search = () => {
  // const [value, setValue] = React.useState("");
  const value=useSelector(state=>state.filter.searchValue)
  const dispatch=useDispatch()
  const inputRef = React.useRef();
  const onClickClearHandler = () => {
    // setSearchValue("");
    // setValue("");
    dispatch(setSearchValue(''))
    inputRef.current.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((string) => {
      dispatch(setSearchValue(string));
    }, 1000),
    []
  );
  console.log('update',updateSearchValue)
  const onChangeInput = (e) => {
    dispatch(setSearchValue(e.target.value));
    updateSearchValue(e.target.value);
  };

  return (
    <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
      <AiOutlineSearch size={25} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="bg-transparent p-2 w-[180px] sm:w-[370px] lg:w-[450px] focus:outline-none focus:border-1 focus:border-b-[2px] focus:border-orange-500"
        type="text"
        placeholder="Search foods"
      />
      {value && (
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
