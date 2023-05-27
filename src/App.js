import React from "react";
import Header from "./components/Header/Header";
import RouterRoot from "./routes/RouterRoot";
import {useSelector} from "react-redux";

function App() {
    const theme = useSelector((state) => state.navbar.changeTheme);

    return (
        <div className={theme ? '' : 'bg-gray-800 min-h-screen'}>
            <Header/>
            <RouterRoot/>
        </div>
    );
}

export default App;
