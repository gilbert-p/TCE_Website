import React from "react";
import Landing_Hero from "../tce_components/Landing_Hero";
import InfoCards from "../tce_components/InfoCards";
import MissionStatement from "../tce_components/MissionStatement";
import ApplySection from "../tce_components/ApplySection";
import Navbar from "../tce_components/TCE_Navbar";
import Footer from "../tce_components/TCE_Footer";
import About from "../tce_pages/About";
import Careers from "../tce_pages/Careers";
import Contact from "../tce_pages/Contact";
import Apply from "../tce_pages/Apply";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/TCE_Website">
            <Landing_Hero />
            <InfoCards />
            <MissionStatement />
            <ApplySection />
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
        <Footer />
      </Router>
    </>
  );
};

export default LandingPage;
