
import React from "react";
// import "./App.css";
import "../components/Footer";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Home from "../components/Home";

const HomePage: React.FC = () => {
  let storage = window.localStorage;
  return (
    <div className="layout-container">
      {/* {nav} */}
      <Nav siteName="电影推荐系统" userName={storage.username} />
      {/* <StrapNav /> */}
      {/* {home} */}
      {/* <Home />
      {/* {footer} */}
      {/* <Footer copyright="ShawForeveryoung" />  */}
    </div>
  );
};

export default HomePage;
