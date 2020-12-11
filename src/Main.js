import "./Main.scss";
import { CSS } from "css.gg";

import LandingPage from "./tce_pages/LandingPage";

import Login from "./dashboard_pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="site-container">
        <Router>
          <div className="main-content">
            <Route exact path="/TCE_Website">
              <LandingPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </div>
        </Router>
      </div>
    </>
  );
}

export default Main;
