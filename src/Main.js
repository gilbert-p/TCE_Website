import "./Main.scss";
import { CSS } from "css.gg";

import LandingPage from "./tce_pages/LandingPage";
import Navbar from "./tce_components/TCE_Navbar";
import Footer from "./tce_components/TCE_Footer";
import About from "./tce_pages/About";
import Careers from "./tce_pages/Careers";
import Contact from "./tce_pages/Contact";
import Apply from "./tce_pages/Apply";
import Login from "./dashboard_pages/Login";
import DashboardHome from "./dashboard_pages/AdminDashboard";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="site-container">
        <Router>
          {/* <div className="main-content"> */}
          <Switch>
            <Route exact path="/TCE_Website">
              <LandingPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/apply">
              <Apply />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard/home">
              <DashboardHome />
            </Route>
          </Switch>
          {/* </div> */}
        </Router>
      </div>
    </>
  );
}

export default Main;
