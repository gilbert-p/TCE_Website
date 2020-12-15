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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useRouteMatch,
} from "react-router-dom";

const LandingPage = () => {
  let { path, url } = useRouteMatch();
  // console.log(path);
  // console.log(url);
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Landing_Hero />
        <InfoCards />
        <MissionStatement />
        <ApplySection />
        <Footer />
      </div>
    </>
  );
};

export default withRouter(LandingPage);
