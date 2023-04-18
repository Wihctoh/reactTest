import React from "react";
import "./Healthcare.css";

const Healthcare = () => {
  return (
    <section className="healthcare">
      <div className="healthcare__text">
        <h1>Virtual healthcare for you</h1>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <a href="#">
          <div className="healthcare__btn">Consult today</div>
        </a>
      </div>

      <div className="healthcare__img"></div>
    </section>
  );
};

export default Healthcare;
