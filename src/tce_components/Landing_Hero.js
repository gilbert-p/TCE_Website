import React, { useState } from "react";
import "../assets/styles/landing_hero.scss";
import landing_hero_img_sm from "../assets/img/hero_img_sm.png";
import landing_hero_img_lg from "../assets/img/hero_img_lg.png";
import useBreakpoints from "../custom_hooks/useBreakpoint";
import { Link } from "react-router-dom";

const Landing_Hero = () => {
  const [screen, setScreen] = useState(useBreakpoints());

  const scrollDefault = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="hero-section">
      <div
        className="hero-container"
        style={
          screen === "md" || screen === "lg"
            ? {
                backgroundImage: `url(${landing_hero_img_lg})`,
              }
            : {
                backgroundImage: `url(${landing_hero_img_sm})`,
              }
        }>
        <div className="hero-content">
          <div className="title-container">
            <h2>Trust</h2>
            <h2>Commitment</h2>
            <h2>Excellence</h2>
          </div>
          <div className="hero-subtitle">
            <h4>Begin your journey today and begin delivering with Amazon</h4>
          </div>
          <div className="cta-button-apply">
            <h2 className="cta-title">
              <Link to="/apply" onClick={scrollDefault}>
                Apply
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing_Hero;
