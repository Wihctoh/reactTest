import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-logo"></div>

      <nav>
        <a href="#">
          <p>Home</p>
        </a>
        <a href="#">
          <p>Find a doctor</p>
        </a>
        <a href="#">
          <p>Apps</p>
        </a>
        <a href="#">
          <p>Testimonials</p>
        </a>
        <a href="#">
          <p>About us</p>
        </a>
      </nav>
    </header>
  );
};

export default Header;
