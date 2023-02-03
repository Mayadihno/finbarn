import React from "react";
import "./About.css";
import image from "../../Assets/image/about2.jpg";
import Vision from "../Home/Vision/Vision";
const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="Aboutbackground__image">
          <div className="about__content">
            <div className="about__text">
              <h1>About Us</h1>
              <p>
                Finbarn Wepo Ltd is a fast-growing commodities and trading
                company located in Barcelona Spain. We strategically source top
                notch materials for the finest agro commodities by working
                closely with selected suppliers.
              </p>
            </div>
          </div>
        </div>
        <div className="about__who">
          <div className="about__context">
            <div className="about__flex">
              <div className="text">
                <h1>Who we are</h1>
                <h4>We specialize in sourcing the finest agro commodities.</h4>
                <p>
                  Our team consists of seasoned experts who are well-versed in
                  agricultural exports and have ample understanding of how the
                  sector works. Our team also has a vast network of influential
                  and renowned industry partners. We thoroughly make sure that
                  our deliverables meet up with our standard of quality control
                  to ensure our customers receive the best products at the most
                  affordable prices.
                </p>
              </div>
              <div className="about__image">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="about__flex">
              <div className="text">
                <h1 className="about" style={{ marginTop: "15px" }}>
                  About Our Company
                </h1>
                <p>
                  We are a leading Agro Business, Trade and Export Company based
                  in Barcelona, Spain. We have vast experience in the field of
                  Agriculture, dealing in the international and local market. We
                  are highly committed to our customers and strive for the best
                  satisfaction.
                </p>
                <p>
                  Finbarn Wepo Ltd was incorporated to engage in the business of
                  farming and trading in agricultural products and agro-allied
                  services.
                </p>
                <p>
                  We ensure that we trade in produce of the highest quality,
                  sourced from farms across Nigeria that meet up with industry
                  standards and farming processes, as laid down by regulatory
                  bodies both locally and internationally. We also ensure that
                  our produce are preserved under the optimum storage conditions
                  throughout the supply chain.
                </p>
                <p>
                  As a registered member of the Nigeria Export Promotion Council
                  (NEPC), we are positioned to export quality agricultural
                  produce from Nigeria to other parts of the world, where they
                  will be processed into finished products in the Foods and
                  Manufacturing sectors.
                </p>
                <p>
                  At Finbarn Wepo Ltd our customers are our priority and we
                  ensure that they always get value for their money. We always
                  ensure that our client orders are delivered on time and
                  according to their budget, we ensure that we meet the
                  contracted quality and quantity specifications of our clients,
                  thus ensuring a smooth and favorable relationship with them.
                </p>
              </div>
            </div>
            <Vision />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
