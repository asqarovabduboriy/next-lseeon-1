import React from "react";
import "./Footer.css";
import { FaTelegram, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="flexx_footer">
            <div className="footer__content">
              <p>Finstreet 118 2561 Fintown</p>
              <p>Hello@finsweet.com 020 7993 2905</p>
            </div>
            <div className="footer__icon">
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
              <FaTelegram />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
