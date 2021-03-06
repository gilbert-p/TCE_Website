import React, { useState } from "react";
import Navbar from "../tce_components/TCE_Navbar";
import Footer from "../tce_components/TCE_Footer";
import "../assets/styles/landing_hero.scss";
import "../assets/styles/contact.scss";
import landing_hero_img_sm from "../assets/img/hero_img_sm.png";
import landing_hero_img_lg from "../assets/img/Ilya_Pavlov_Unsplash.png";
import "../assets/styles/utility/form.scss";

import dax7_map from "../assets/img/DAX7_google_maps.png";
import useBreakpoints from "../custom_hooks/useBreakpoint";
import { Link } from "react-router-dom";


const Contact = () => {
  const [screen, setScreen] = useState(useBreakpoints());
  return (
    <>
      <Navbar />
      <div className="main-content">
        <section className="hero-section">
          <div
            className="hero-container"
            id="contact-hero"
            style={
              screen === "md" || screen === "lg"
                ? {
                    backgroundImage: `url(${landing_hero_img_lg})`,
                  }
                : {
                    height: "200px",
                    backgroundImage: `url(${landing_hero_img_lg})`,
                    backgroundPosition: "15% 50%",
                  }
            }></div>
        </section>
        <div id="form-content">
          <div className="form-container">
            <div className="form-title-container">
              <h3>Contact Us</h3>
            </div>
            <div id="form-container" className="">
              <form id="form-styling">
                <div className="form-inner-container">
                  <label for="firstName" className="field-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    placeholder="First Name"
                    required
                    //   value={name}
                    //   onChange={(e) => setName(e.currentTarget.value)}
                  />
                  <label for="lastName" className="field-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    required
                    //   value={name}
                    //   onChange={(e) => setName(e.currentTarget.value)}
                  />
                  <div className="">
                    <label for="inputEmail" className="field-name">
                      Email
                    </label>
                    <input
                      type="email"
                      id="inputEmail"
                      className=""
                      placeholder="name@example.com"
                      required
                      //   value={email}
                      //   onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </div>

                  <div className="">
                    <label for="messageInput" className="field-name">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="messageInput"
                      rows="3"
                      placeholder="Enter message"
                      required
                      //   value={message}
                      //   onChange={(e) =>
                      //     setMessage(e.currentTarget.value)
                      //   }
                    ></textarea>
                  </div>
                  <div className="form-submit-button-container">
                    <input
                      className="form-control"
                      id="contact-submit"
                      type="submit"
                      className=""
                      value="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="map-location-container">
            <div className="map-image-container">
              <a href="https://goo.gl/maps/Vh292doZvD6MZbWz7">
                <img src={dax7_map} alt="" />
              </a>
            </div>
            <div className="location-info-container">
              <div className="location-header">
                <h4>Location</h4>
              </div>
              <div className="location-address">
                <h4>9350 Rail Ave, South Gate</h4>
              </div>
              <div className="dsp-name">
                <h4>Amazon Delivery Station DAX7</h4>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
