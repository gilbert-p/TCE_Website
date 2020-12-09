import React, { useState } from "react";
import "../assets/styles/about.scss";
import "../assets/styles/landing_hero.scss";
import landing_hero_img_lg from "../assets/img/tce_team_pic.png";
import landing_hero_img_sm from "../assets/img/tce_team_pic_sm.png";
import bio_portrait from "../assets/img/eric_culberson_portrait.png";
import useBreakpoints from "../custom_hooks/useBreakpoint";

const About = () => {
  const [screen, setScreen] = useState(useBreakpoints());

  return (
    <>
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
          }></div>
      </section>

      <section className="about-company">
        <div className="company-summary">
          <div id="about-title">
            <h2>History of Temple Culberson Enterprises</h2>
          </div>
          <div id="summary-description">
            <p>
              From the start of the company in 2019, the core values instilled
              by the CEO allowed the Delivery Service Provider to rise to be one
              of the most prominent in the field of service providers throughout
              Los Angeles. With the CEO’s vast experience in managing large
              scale operations that range from notable Fortune 500 companies
              such as Tesla, and General Electric, to other exceptional
              manufacturing companies such as Shell Solar, and Solecta; the
              company has instilled a team oriented culture with a strong focus
              in providing excellent customer service, and the streamlining of
              business processes.
            </p>
          </div>
        </div>
        <div className="bio-block">
          <div className="bio-img">
            <img src={bio_portrait} alt="Eric Culberson Portrait Picture" />
          </div>
          <div className="bio-title-info">
            <div className="bio-title">
              <h2>Eric Culberson</h2>
            </div>
            <div className="bio-subtitle">
              <h3>Founder</h3>
            </div>
          </div>
          <div className="bio-summary">
            <p>
              With a strong background in electrical engineering and management
              in manufacturing, Eric Culberson knows how to handle both the low
              level and high level operations of running a business. With over
              30 years of experience in management operations, Eric understands
              what is required to find success in any situation and is laser
              focused on expanding the company while maintaining the status quo
              of excellence in both employees and management.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
