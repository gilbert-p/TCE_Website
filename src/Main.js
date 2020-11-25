import "./Main.scss";
import { CSS } from "css.gg";
import Navbar from "./tce_components/TCE_Navbar";
import Landing_Hero from "./tce_components/Landing_Hero";
import InfoCards from "./tce_components/InfoCards";
import MissionStatement from "./tce_components/MissionStatement";
import ApplySection from "./tce_components/ApplySection";
import Footer from "./tce_components/TCE_Footer";

function Main() {
  return (
    <>
      <div className="site-container">
        <Navbar />
        <div className="main-content">
          <Landing_Hero />
          <InfoCards />
          <MissionStatement />
          <ApplySection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
