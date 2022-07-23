import React from "react";
import { Link } from "react-router-dom";

import Grid from "./Grid";
import logo from "../assets/images/logo3.png";

const footerAboutLinks = [
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/about",
  },
  {
    display: "Recruitment",
    path: "/about",
  },
  {
    display: "News",
    path: "/about",
  },
  {
    display: "Store System",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Privacy Policy",
    path: "/about",
  },
  {
    display: "Warranty Policy",
    path: "/about",
  },
  {
    display: "Return Policy",
    path: "/about",
  },
  {
    display: "Refund Policy",
    path: "/about",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1}>
          <div>
            <div className="footer__title">Contact Center</div>
            <div className="footer__content">
              <p>
                Contact To Order: <strong>0123456789</strong>
              </p>
              <p>
                Questions Order: <strong>0123456789</strong>
              </p>
              <p>
                Suggestions, Complains: <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">About ABC</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Customer Care</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="logo" />
              </Link>
            </p>
            <p>Towards prestige, quality and reasonable cost</p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
