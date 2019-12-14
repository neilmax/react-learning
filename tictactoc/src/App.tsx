import React from "react";
import "./App.css";
import Login from "./components/Login"


const App: React.FC = () => {
  return (
    <div className="layout-container">
        <Login func="登录"></Login>
    </div>
  );
};

export default App;
