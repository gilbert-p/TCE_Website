import "./Main.scss";
import { CSS } from "css.gg";
import Navbar from "./tce_components/TCE_Navbar";
import Footer from "./tce_components/TCE_Footer";
import LandingPage from "./tce_pages/LandingPage";
import About from "./tce_pages/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="site-container">
        <Router>
          <Navbar />
          <div className="main-content">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default Main;
