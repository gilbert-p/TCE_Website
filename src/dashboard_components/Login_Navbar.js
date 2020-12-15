import React, { useState } from "react";
import "../assets/dashboard_styles/dashboard_nav.scss";
import tce_logo from "../assets/img/TCE_LOGO@sm.png";

import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Login_Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [duration, setDuration] = useState(0.3);

  const mobileMenu = () => {
    let isOpen = showMenu;
    if (!isOpen) {
      gsap.to(".mobile-menu-container", {
        opacity: 1,
        duration,
        transform: "translateX(-100%)",
        display: "inline-block",
      });
    } else {
      gsap.to(".mobile-menu-container", {
        opacity: 0,
        duration,
        transform: "translateX(0)",
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
            <h1>Admin Dashboard</h1>
          </div>
          <div className="nav-button" onClick={mobileMenu}>
            <i className="gg-menu-boxed"></i>
          </div>

          <div className="nav-links-container">
            <ul>
              <li>
                <Link to="/TCE_Website">TCE Homepage</Link>
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
                TCE Homepage
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Login_Navbar;
