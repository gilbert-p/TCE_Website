import React from "react";
import "../assets/styles/tce_footer.scss";
import { Link } from "react-router-dom";

const TCE_Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content-container">
          <div className="link-container">
            <div className="link-section-title">
              <h4>Careers</h4>
              <div className="footer-link">
                <h5>Last Mile Delivery</h5>
              </div>
            </div>
            <div className="link-section-title">
              <h4>About</h4>
              <div className="footer-link">
                <h5>Company</h5>
                <h5>Contact</h5>
                <h5>
                  <Link to="/login">Portal</Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="footer-subtitle-content">
            <div className="footer-subtitle-container">
              <div className="company-title">
                <h2>Temple Culberson Enterprises</h2>
              </div>
              <div className="company-motto">
                <h2>Trust Commitment Excellence</h2>
              </div>
              <div className="business-structure">
                <h5>Temple Culberson LLC @ 2021</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TCE_Footer;
