import React from "react";
import "../assets/styles/info_card.scss";
import dsp_img from "../assets/img/dsp_img_sm.png";
import driver_img from "../assets/img/driver_img_sm.png";
import community_img from "../assets/img/community_img_sm.png";

const InfoCards = () => {
  return (
    <section id="info-cards">
      <div className="info-card">
        <div className="card-title">
          <h4>Amazon Delivery Service Partner</h4>
        </div>
        <div className="card-image">
          <img src={dsp_img} alt="night city image" />
        </div>
        <div className="card-body-text">
          <p>
            Temple Culberson Enterprises is a dedicated DAX7 Amazon Delivery
            Service Partner based out of the city of Commerce. Our routes are
            primarily centered around the neighboring areas of Los Angeles.
          </p>
        </div>
      </div>
      <div className="info-card">
        <div className="card-title">
          <h4>Become a Driver</h4>
        </div>
        <div className="card-image">
          <img src={driver_img} alt="delivery image" />
        </div>
        <div className="card-body-text">
          <p>
            Temple Culberson Enterprises is a dedicated DAX7 Amazon Delivery
            Service Partner based out of the city of Commerce. Our routes are
            primarily centered around the neighboring areas of Los Angeles.
          </p>
        </div>
      </div>
      <div className="info-card">
        <div className="card-title">
          <h4>Serving the Community</h4>
        </div>
        <div className="card-image">
          <img src={community_img} alt="neighborhood image" />
        </div>
        <div className="card-body-text">
          <p>
            Temple Culberson Enterprises is a dedicated DAX7 Amazon Delivery
            Service Partner based out of the city of Commerce. Our routes are
            primarily centered around the neighboring areas of Los Angeles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
