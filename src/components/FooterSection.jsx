import React from "react";
import { Container } from "react-bootstrap";
import icon1 from "../assets/icons/icon-1.png";
import icon2 from "../assets/icons/icon-2.png";
import icon3 from "../assets/icons/icon-3.png";
import icon4 from "../assets/icons/icon-4.png";
import icon5 from "../assets/icons/icon-5.png";
import icon6 from "../assets/icons/icon-6.png";
import icon7 from "../assets/icons/icon-7.png";
import icon8 from "../assets/icons/icon-8.png";
import icon9 from "../assets/icons/icon-9.png";

const FooterSection = () => {
  return (
    <footer className="bg-white pt-5">
      <Container>
        <div className="text-center mb-4">
          <h3 className="brand-name mb-2">
            dimend<span className="fw-bold">SCAASI</span>
          </h3>
          <p className="years-text">20+ Years Of Trust</p>
        </div>

        <div className="text-center about-store mb-4">
          <p>
            dimend SCAASI Jeweler is a unique jewelry store located in Chicago
            with an emphasis on great style and exceptional quality.
          </p>
        </div>
        <div className="line"></div>
        <div className="text-center footer-links mb-4">
          <a href="#education" className="footer-link">
            Education
          </a>
          <a href="#about" className="footer-link">
            About Us
          </a>
          <a href="#care" className="footer-link">
            Customer Care
          </a>
          <a href="#contact" className="footer-link">
            Contact Us
          </a>
        </div>

        <div className="footer-icons-wrapper">
          <img
            src={icon1}
            alt="GIA"
            className="cert-icon"
            width="50"
            height="30"
          />
          <img
            src={icon2}
            alt="Certification"
            className="cert-icon"
            width="50"
            height="30"
          />
          <img
            src={icon3}
            alt="IGC"
            className="cert-icon"
            width="50"
            height="30"
          />
          <img
            src={icon4}
            alt="Diamond certification"
            className="cert-icon"
            width="50"
            height="30"
          />
          <img
            src={icon5}
            alt="Visa"
            className="payment-icon"
            width="50"
            height="30"
          />
          <img
            src={icon6}
            alt="Mastercard"
            className="payment-icon"
            width="50"
            height="30"
          />
          <img
            src={icon7}
            alt="Discover"
            className="payment-icon"
            width="50"
            height="30"
          />
          <img
            src={icon8}
            alt="PayPal"
            className="payment-icon"
            width="50"
            height="30"
          />
          <img
            src={icon9}
            alt="PayPal"
            className="payment-icon"
            width="50"
            height="30"
          />
        </div>

        <div className="text-center copyright mb-3 small">
          <p>
            dimendSCAASI™ and InnerView® are Registered Trademarks of dimend
            SCAASI LLC © 2000-2020 dimendSCAASI LLC.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;
