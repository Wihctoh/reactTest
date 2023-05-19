import React from "react";
import "./Our-services.css";
import Goods from "./Goods";

const OurServices = () => {
  return (
    <div>
      <div className="our-services-wrapper">
        <h2>Our services</h2>
        <div className="line"></div>
        <p>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>

        <div className="our-services__goods">
          <Goods
            title="Search doctor"
            text="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          />
          <Goods
            title="Online pharmacy"
            text="Buy  your medicines with our mobile application with a simple delivery system"
          />
          <Goods
            title="Consultation"
            text="Free consultation with our trusted doctors and get the best recomendations"
          />
          <Goods
            title="Details info"
            text="Free consultation with our trusted doctors and get the best recomendations"
          />
          <Goods
            title="Emergency care"
            text="You can get 24/7 urgent care for yourself or your children and your
lovely family"
          />
          <Goods
            title="Tracking"
            text="Track and save your medical history and health data "
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
