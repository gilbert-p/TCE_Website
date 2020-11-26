import React, { useState } from "react";
import "../assets/styles/tce_nav.scss";
import tce_logo from "../assets/img/TCE_LOGO@sm.png";
import { gsap } from "gsap";

const TCE_navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [duration, setDuration] = useState(0.3);

  const mobileMenu = () => {
    let isOpen = showMenu;
    if (!isOpen) {
      gsap.to(".mobile-menu-container", {
        opacity: 1,
        duration,
        transform: "translateX(-100%)",
      });
    } else {
      gsap.to(".mobile-menu-container", {
        opacity: 0,
        duration,
        transform: "translateX(0)",
      });
    }

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
        </div>
      </div>
      <div className="mobile-menu-container">
        <div className="mobile-nav-container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TCE_navbar;
