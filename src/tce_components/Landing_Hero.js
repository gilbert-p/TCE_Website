import React from "react";
import "../assets/styles/landing-hero.scss";
import landing_hero_img from "../assets/img/hero_img_sm.png";

const landing_hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-img-container">
          <img src={landing_hero_img} alt="company vans tce" />
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

export default landing_hero;
