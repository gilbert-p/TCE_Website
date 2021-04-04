import React, { useState } from "react";
import "../assets/styles/tce_nav.scss";
import tce_logo from "../assets/img/TCE_LOGO@sm.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const TCE_navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [duration, setDuration] = useState(0.3);

  const mobileMenu = () => {
    let isOpen = showMenu;
    if (!isOpen) {
      gsap.to(".mobile-menu-container", {
        display: "flex",
        opacity: 1,
        duration,
        left: "calc(100% - 175px)",

      });
    } else {
      gsap.to(".mobile-menu-container", {
        opacity: 0,
        duration,
        left: "100%",
        display: "none",
      });
    }

    setShowMenu(!showMenu);
  };

  const closeNav = () => {
    let isOpen = showMenu;
    if (!isOpen) return;
    gsap.to(".mobile-menu-container", {
      opacity: 1,
      duration: 0.5,
      transform: "translateX(0)",
      display: "none",
    });
    window.scrollTo(0, 0);
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="tce-logo">
            <img src={tce_logo} alt="tce_logo" />
          </div>
          <div className="company-name">
            <h1>Temple Culberson Enterprises</h1>
          </div>
          <div className="nav-button" onClick={mobileMenu}>
            <i className="gg-menu-boxed"></i>
          </div>

          <div className="nav-links-container">
            <ul>
              <li>
                <Link to="/TCE_Website">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-menu-container">
        <div className="mobile-nav-container">
          <ul>
            <li>
              <Link to="/TCE_Website" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={closeNav}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TCE_navbar;
