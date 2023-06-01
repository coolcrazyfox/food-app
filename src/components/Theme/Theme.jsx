import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTestOn } from "../../redux/store/Slices/navBarSlice";

const Theme = () => {
  const test = useSelector((state) => state.navbar.testOn);
  const dispatch = useDispatch();
  console.log("test", typeof test);
  // const [theme, setTheme] = React.useState("");
  const toggleTheme = () => {
    // setTheme(theme === "dark" ? "" : "dark");
    dispatch(setTestOn(test === "" ? "bg-gray-200" : "text-red-400"));
  };
  return (
    <div
    // className={`theme_container${theme}`}
    >
      <h1 onClick={toggleTheme} className={`${test}`}>
        Theme
      </h1>
    </div>
  );
};

export default Theme;
