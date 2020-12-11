import React from "react";
import "../assets/styles/apply_section.scss";
import { Link } from "react-router-dom";

const ApplySection = () => {
  const scrollDefault = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id="cta-apply">
      <div className="cta-apply-container">
        <div className="cta-section-title">
          <h2>Ready to be part of the team?</h2>
        </div>
        <div className="cta-section-subtext">
          <p>
            Begin your journey in being part of the bigger picture when it comes
            to serving thousands in various areas of Los Angeles.
          </p>
        </div>
        <Link to="/apply" onClick={scrollDefault}>
          <div className="cta-button-apply">
            <h2 className="cta-title">Apply</h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ApplySection;
