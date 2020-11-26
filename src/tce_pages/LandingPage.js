import React from "react";
import Landing_Hero from "../tce_components/Landing_Hero";
import InfoCards from "../tce_components/InfoCards";
import MissionStatement from "../tce_components/MissionStatement";
import ApplySection from "../tce_components/ApplySection";

const LandingPage = () => {
  return (
    <>
      <Landing_Hero />
      <InfoCards />
      <MissionStatement />
      <ApplySection />
    </>
  );
};

export default LandingPage;
