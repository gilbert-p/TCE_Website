import React, { useState } from "react";
import "../assets/styles/landing_hero.scss";
import "../assets/styles/contact.scss";
import landing_hero_img_sm from "../assets/img/hero_img_sm.png";
import landing_hero_img_lg from "../assets/img/hero_img_lg.png";
import dax7_map from "../assets/img/DAX7_google_maps.png";
import useBreakpoints from "../custom_hooks/useBreakpoint";

const Contact = () => {
  const [screen, setScreen] = useState(useBreakpoints());
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-img-container">
            {screen === "md" || screen === "lg" ? (
              <img src={landing_hero_img_lg} alt="company vans tce" />
            ) : (
              <img src={landing_hero_img_sm} alt="company vans tce" />
            )}
          </div>
        </div>
      </section>

      <div className="contact-form-container">
        <div className="contact-title-container">
          <h3>Contact Us</h3>
        </div>
        <div id="form-container" className="">
          <form id="contact-form">
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
          <img src={dax7_map} alt="" />
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
    </>
  );
};

export default Contact;
