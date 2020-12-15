import React, { useState } from "react";
import Navbar from "../tce_components/TCE_Navbar";
import "../assets/styles/landing_hero.scss";
import "../assets/styles/careers.scss";
import landing_hero_img_sm from "../assets/img/hero_img_sm.png";
import landing_hero_img_lg from "../assets/img/hero_img_lg.png";
import { Link } from "react-router-dom";
import useBreakpoints from "../custom_hooks/useBreakpoint";

const Careers = () => {
  const [screen, setScreen] = useState(useBreakpoints());

  const scrollDefault = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="outer-table-container">
          <div className="table-header">
            <h2>Job List</h2>
          </div>
          <table className="table-container">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Last Mile Delivery</td>
              <td>Delivery Driver for in and around the city of South Gate.</td>
              <td>
                <div className="table-apply-container">
                  <h3>
                    <Link to="/apply" onClick={scrollDefault}>
                      Apply
                    </Link>
                  </h3>
                </div>
              </td>
            </tr>
            <tr>
              <td>Last Mile Delivery</td>
              <td>Delivery Driver for in and around the city of South Gate.</td>
              <td>
                <div className="table-apply-container">
                  <h3>
                    <Link to="/apply" onClick={scrollDefault}>
                      Apply
                    </Link>
                  </h3>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Careers;
