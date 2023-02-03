import React from "react";
import "./Welcome.css";
import image from "../../../Assets/Other-product/hibiscus flower.jpeg";
import image2 from "../../../Assets/Charcoal/charcoal1.jpg";
import image3 from "../../../Assets/Cocoa/Cocoa seed.webp";
import image4 from "../../../Assets/cashew/Cashew kernel.jpeg";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="welcome">
        <div className="welcome__content">
          <div className="welcome__flex">
            <div className="welcome__text">
              <h3>
                Welcome to
                <span>
                  <strong>FINBARN</strong> <b>WEPO</b> Ltd
                </span>
              </h3>
              <p>
                FINBARN WEPO Ltd connects commodities sourced at farm gates to
                local economies, emerging markets and the Global Agro Business
                Markets. We are exporters of several Agro Commodities in
                Nigeria. We export several Agro Commodities like, Sesame Seeds,
                Ginger, Cocoa Beans, Cashew Nuts, Maize Corn, Charcoal, Shea
                Butter, Coffee Beans and Harbiscus Flower. Our supply chain
                penetrates deep into remote agricultural regions where we
                procure commodities from farmers through our strategically
                located centres. The commodities are then accumulated at our
                warehouses and/or transported to processing facilities, prior to
                reaching our customers.
              </p>
            </div>
            <div className="welcome__image">
              <div className="grid__image">
                <img src={image} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
