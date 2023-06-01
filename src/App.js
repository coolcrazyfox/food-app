import React from "react";
import Header from "./components/Header/Header";
import RouterRoot from "./routes/RouterRoot";
import { useSelector } from "react-redux";

function App() {
  const themeApp = useSelector((state) => state.navbar.changeTheme);
  return (
    <div className={themeApp === "dark" ? "" : "bg-gray-800 min-h-screen"}>
      <Header />
      <RouterRoot />
    </div>
  );
}

export default App;
