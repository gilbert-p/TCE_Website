import React, { useState } from "react";
import "../assets/styles/landing_hero.scss";
import landing_hero_img_sm from "../assets/img/hero_img_sm.png";
import landing_hero_img_lg from "../assets/img/hero_img_lg.png";
import useBreakpoints from "../custom_hooks/useBreakpoint";

const Landing_Hero = () => {
  const [screen, setScreen] = useState(useBreakpoints());
  console.log(screen);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-img-container">
          {screen === "md" || screen === "lg" ? (
            <img src={landing_hero_img_lg} alt="company vans tce" />
          ) : (
            <img src={landing_hero_img_sm} alt="company vans tce" />
          )}
        </div>
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
            <h2 className="cta-title">APPLY!</h2>
          </div>
        </div>
        {/* <img className="hero-container" src="" alt="tce_vans_img" /> */}
      </div>
    </section>
  );
};

export default Landing_Hero;
