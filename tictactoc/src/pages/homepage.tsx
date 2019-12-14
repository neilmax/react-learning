
import React from "react";
// import "./App.css";
import "../components/Footer";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Home from "../components/Home";

const HomePage: React.FC = () => {
  return (
    <div className="layout-container">
      {/* {nav} */}
      <Nav siteName="ShaaaaaaW" userName="Young Shaw" />
      {/* <StrapNav /> */}
      {/* {home} */}
      <Home />
      {/* {footer} */}
      <Footer copyright="ShawForeveryoung" />
    </div>
  );
};

export default HomePage;
