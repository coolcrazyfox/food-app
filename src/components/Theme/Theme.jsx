import React from "react";

const Theme = () => {
  const [theme, setTheme] = React.useState("");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "" : "dark");
  };
  return (
    <div className={`theme_container${theme}`}>
      <h1>Theme</h1>
    </div>
  );
};

export default Theme;
