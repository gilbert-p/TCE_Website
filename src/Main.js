import "./Main.scss";
import { CSS } from "css.gg";
import Navbar from "./tce_components/TCE_Navbar";
import Footer from "./tce_components/TCE_Footer";
import LandingPage from "./tce_pages/LandingPage";
import About from "./tce_pages/About";
import Careers from "./tce_pages/Careers";
import Contact from "./tce_pages/Contact";
import Apply from "./tce_pages/Apply";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="site-container">
        <Router>
          <Navbar />
          <div className="main-content">
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
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default Main;
