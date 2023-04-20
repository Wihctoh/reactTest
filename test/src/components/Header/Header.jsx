import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header>
      <div className="header-logo"></div>

      <Nav />
    </header>
  );
};

export default Header;
