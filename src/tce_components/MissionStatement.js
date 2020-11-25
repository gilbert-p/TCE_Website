import React from "react";
import "../assets/styles/mission_section.scss";
import mission_img from "../assets/img/mission_img_sm.png";

const MissionStatement = () => {
  return (
    <section id="mission-statement">
      <div className="mission-container">
        <div className="mission-image-container">
          <div className="mission-title-container">
            <h2>Our Mission</h2>
          </div>
          <img src={mission_img} alt="delivery truck image" />
        </div>
        <div className="mission-body-text-container">
          <p>
            Temple-Culberson Enterprises (TCE) is seeking individuals who are
            quick learners, motivated and team players to join our growing
            driver network. We offer a safe, comfortable van while using the
            latest technology to deliver Amazon packages. At TCE, we want all
            our employees to have fun while working hard & be successful in life
            not just work. We work as a team to make it happen, all day every
            day. Come join us on this exciting journey with TCE & Amazon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
