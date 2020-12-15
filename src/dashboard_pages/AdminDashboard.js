import React from "react";
import "../assets/styles/info_card.scss";
import "../assets/dashboard_styles/dashboard_base.scss";
import DashboardNav from "../dashboard_components/Dashboard_Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <DashboardNav />
      <div className="main-content">
        <section id="dashboard-info-cards">
          <div className="info-card">
            <div className="card-title">
              <i class="gg-user-list"></i>
              <h4>Applicants</h4>
            </div>
            <div className="card-body-text">
              View list of submitted applications for TCE DSP
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">
              <i class="gg-user-list"></i>
              <h4>Messages</h4>
            </div>
            <div className="card-body-text">
              View list of submitted applications for TCE DSP
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">
              <i class="gg-user-list"></i>
              <h4>DVCR</h4>
            </div>
            <div className="card-body-text">
              View list of submitted applications for TCE DSP
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">
              <i class="gg-user-list"></i>
              <h4>Scorecard</h4>
            </div>
            <div className="card-body-text">
              View list of submitted applications for TCE DSP
            </div>
          </div>
        </section>
        <div className="dashboard-home-container">
          <div className="dashboard-card-container"></div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
