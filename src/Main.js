import "./Main.scss";
import { CSS } from "css.gg";
import Navbar from "./tce_components/TCE_Navbar";
import Footer from "./tce_components/TCE_Footer";
import LandingPage from "./tce_pages/LandingPage";

function Main() {
  return (
    <>
      <div className="site-container">
        <Navbar />
        <div className="main-content">
          <LandingPage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
