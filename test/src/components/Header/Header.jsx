import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-logo"></div>

      <nav>
        <p>Home</p>
        <p>Find a doctor</p>
        <p>Apps</p>
        <p>Testimonials</p>
        <p>About us</p>
      </nav>
    </header>
  );
};

export default Header;
