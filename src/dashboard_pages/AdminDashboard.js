import React from "react";
import "../assets/styles/info_card.scss";
import "../assets/dashboard_styles/dashboard_base.scss";
import DashboardNav from "../dashboard_components/Dashboard_Navbar";
import ApplicantsView from "../dashboard_components/ApplicantsView";
import { BrowserRouter as Router, Switch, Link, Route,   useRouteMatch } from "react-router-dom";

import CustomProperties from 'react-custom-properties';

const AdminDashboard = () => {

      // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
    let { path, url } = useRouteMatch();

  return (
    <>
          {/* <DashboardNav /> */}


      <CustomProperties properties={{ '--custom-width': '100%' }}>
      <div className=" main-content">


        <Router>
        <Switch>
          <Route exact path="/dashboard">
                      <DashboardNav />
            <div className="dashboard-container">
            <section id="dashboard-info-cards">
              <div id="dashboard-title">
                Dashboard
              </div>
              <div className="info-card-container">
              <Link to={`${url}/applicants`}>
                <div className="info-card" style={{backgroundColor: "#16C79A"}}>
                  <div className="card-title">
                    <i class="gg-user-list"></i>
                    <h4>Applicants</h4>
                    
                  </div>
                  <div className="card-body-text" >
                    View list of submitted applications for TCE DSP
                  </div>
                </div>
                </Link>
                <div className="info-card" style={{backgroundColor: "#3697CD"}}>
                  <div className="card-title">
                  <i class="gg-list"></i>
                    <h4>Messages</h4>
                  </div>
                  <div className="card-body-text">
                    View list of submitted applications for TCE DSP
                  </div>
                </div>
                <div className="info-card" style={{backgroundColor: "#AC4B50"}}>
                  <div className="card-title">
                  <i class="gg-chart"></i>
                    <h4>DVCR</h4>
                  </div>
                  <div className="card-body-text">
                    View list of submitted applications for TCE DSP
                  </div>
                </div>
                <div className="info-card" style={{backgroundColor: "#E2A851"}}>
                  <div className="card-title">
                  <i class="gg-credit-card"></i>
                    <h4>Scorecard</h4>
                  </div>
                  <div className="card-body-text">
                    View list of submitted applications for TCE DSP
                  </div>
                </div>
              </div>

            </section>
            </div>

            
          </Route>

          <Route path="/dashboard/applicants">
          <DashboardNav/>
            <div className="dashboard-container">
              <ApplicantsView/>
            </div>

          </Route>

          {/* <div className="dashboard-home-container">
            <div className="dashboard-card-container"></div>
          </div> */}
        </Switch>
    </Router>


      </div>
      </CustomProperties>

    </>
  );
};

export default AdminDashboard;
