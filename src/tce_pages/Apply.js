import React, { useState } from "react";
import "../assets/styles/apply_page.scss";
import "../assets/styles/landing_hero.scss";
import landing_hero_img_sm from "../assets/img/hero_img_sm.png";
import landing_hero_img_lg from "../assets/img/hero_img_lg.png";
import dax7_map from "../assets/img/DAX7_google_maps.png";
import useBreakpoints from "../custom_hooks/useBreakpoint";

const Apply = () => {
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

      <div className="apply-info-container">
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>What we look for</h3>
          </div>
          <div className="apply-section-info-body">
            <p>
              Temple-Culberson Enterprises (TCE) is seeking individuals who are
              quick learners, motivated and team players to join our growing
              driver network. We offer a safe, comfortable van while using the
              latest technology to deliver Amazon packages. At TCE, we want all
              our employees to have fun while working hard & be successful in
              life not just work. We work as a team to make it happen, all day
              every day. Come join us on this exciting journey with TCE &
              Amazon.
            </p>
          </div>
        </div>
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>Job Title</h3>
          </div>
          <div className="job-title-container">
            <h2>Last Mile Delivery</h2>
          </div>
        </div>
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>Job Description</h3>
          </div>
          <div className="apply-section-info-body">
            <p>
              Temple-Culberson Enterprises (TCE) is seeking individuals who are
              quick learners, motivated and team players to join our growing
              driver network. We offer a safe, comfortable van while using the
              latest technology to deliver Amazon packages. At TCE, we want all
              our employees to have fun while working hard & be successful in
              life not just work. We work as a team to make it happen, all day
              every day. Come join us on this exciting journey with TCE &
              Amazon. Currently, we are looking for delivery drivers to service
              a 20-mile radius from the City of Commerce. An average day
              consists of 9 hours driving, 3- 4 days a week (Monday – Sunday).
              Dedicated shifts with same days off if desired. Must be
              comfortable driving high roof cargo vans (company provided
              vehicle). Full-time preferred, Part-time acceptable
            </p>
          </div>
        </div>
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>Location</h3>
          </div>
          <div className="apply-section-info-body">
            <p>City of South Gate</p>
          </div>
        </div>
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>Requirements</h3>
          </div>
          <div className="apply-section-info-body">
            <ul>
              <li>Minimum 21 years old with a valid Driver's License.</li>
              <li>Capable of operating a smartphone device like cell phone.</li>
              <li>Lift & carry packages, sometimes up to 50 lbs.</li>
              <li>
                Follow written & verbal instructions from Dispatcher to ensure
                packages are delivered safely & correctly.
              </li>
              <li>
                Provide feedback to dispatcher on any issues during your day.
              </li>
              <li>
                Complete route in the allotted time while being as safe and
                accurate as possible.
              </li>
            </ul>
          </div>
        </div>
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>Experience</h3>
          </div>
          <div className="apply-section-info-body">
            <ul>
              <li>Delivery Driver: 1 year (Preferred)</li>
            </ul>
          </div>
        </div>
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>Benefits</h3>
          </div>
          <div className="apply-section-info-body">
            <ul>
              <li>Bi-Weekly Pay, Paid Time off (PTO)</li>
              <li>Medical/Dental/401K after 30 days</li>
            </ul>
          </div>
        </div>
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>Salary</h3>
          </div>
          <div className="apply-section-info-body">
            <ul>
              <li>
                $15/hr. plus monthly bonuses for attendance/safety/on-time &
                successful deliveries.
              </li>
            </ul>
          </div>
        </div>
        <div className="apply-section-info">
          <div className="apply-section-title">
            <h3>Comply with Background & Testing Requirements:</h3>
          </div>
          <div className="apply-section-info-body">
            <ul>
              <li>
                7-year Federal & State felony/misdemeanor search in all
                countries identified
              </li>
              <li>Motor vehicle driving record.</li>
              <li>5 Panel Drug Testing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="apply-form-container">
        <div className="contact-title-container">
          <h3>Your Information</h3>
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
                className=""
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
                className=""
                placeholder="Last Name"
                required
                //   value={name}
                //   onChange={(e) => setName(e.currentTarget.value)}
              />
              <label for="phoneNumber" className="field-name">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className=""
                placeholder="(123) 456-7890"
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
                  placeholder="email@example.com"
                  required
                  //   value={email}
                  //   onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>

              <div className="form-submit-button-container">
                <input
                  className=""
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
    </>
  );
};

export default Apply;
