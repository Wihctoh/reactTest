import React from "react";

const Goods = ({ title, text }) => {
  return (
    <div>
      <div className="our-services__goods-one">
        <div className="our-services__goods-one_img"></div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Goods;
