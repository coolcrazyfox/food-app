import React from "react";
import Header from "./components/Header/Header";
import RouterRoot from "./routes/RouterRoot";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <RouterRoot searchValue={searchValue} />
    </div>
  );
}

export default App;
