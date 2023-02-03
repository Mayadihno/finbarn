import React from "react";
import "./Footer.css";
import { RiLeafFill } from "react-icons/ri";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__backround">
          <div className="footer__content">
            <div className="footer__flex">
              <div className="footer__logo">
                <div className="navbar__logo">
                  <Link to={"/"}>
                    <div className="logo">
                      <RiLeafFill fontSize={30} color="green" />F
                    </div>
                    <span>Finbarn</span>
                  </Link>
                </div>
                <div className="icons">
                  <div className="face">
                    <FaFacebookF color="#6D67E4" />
                  </div>
                  <div className="twi">
                    <FaTwitter color="#4CACBC" />
                  </div>
                  <div className="insta">
                    <FaInstagram color="#FEC260" />
                  </div>
                  <div className="insta">
                    <a
                      href="https://wa.me/+34642583766"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp color="#A0D995" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="quickLinks">
                <h2>Quick Links</h2>
                <div className="footer__links">
                  <Link to={"/about"}>About Us</Link>
                  <Link to={"products"}>Shop</Link>
                  <Link to={"/contact"}>Contact</Link>
                </div>
              </div>
              <div className="contact-us">
                <h2>Contact</h2>
                <div className="footer__contact">
                  <div className="home">
                    <MdLocationOn fontSize={30} color="white" />
                    <span>
                      Placa Pompeu Fabra 4, 08760 Martorell, Barcelona, Spain.
                    </span>
                  </div>
                  <div className="phone">
                    <MdCall fontSize={30} color="white" />
                    <span>+34642583766</span>
                  </div>
                  <div className="email">
                    <MdEmail fontSize={30} color="white" />
                    <span>info@finbarn.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="copy">
            Copyright &copy;2023 Finbarn Wepo Ltd. All Rights Reserved.
          </div>
          <div className="maintain">
            Website is Developed and Maintained by Mayadihno@gmail.com ||
            <a
              href="https://wa.me/+23436908207"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp color="#A0D995" fontSize={20} className="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
