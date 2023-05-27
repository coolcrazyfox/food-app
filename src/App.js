import React from "react";
import Header from "./components/Header/Header";
import RouterRoot from "./routes/RouterRoot";
import { useSelector } from "react-redux";

function App() {
    const theme = useSelector((state) => state.navbar.changeTheme);
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className={theme?'':'bg-gray-500 h-screen'}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <RouterRoot searchValue={searchValue} />
    </div>
  );
}

export default App;
