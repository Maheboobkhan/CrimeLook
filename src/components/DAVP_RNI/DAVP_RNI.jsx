import React, {useEffect} from "react";
import "../DAVP_RNI/DAVP_RNI.css";
import Navbar from "../MainPage/Navbar/Navbar";
import Footer from "../MainPage/Footer/Footer";
import image1 from "../DAVP_RNI/RNI-1.png";
import image2 from "../DAVP_RNI/RNI-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const DAVP_RNI = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
  return (
    <div>
      <Navbar />
      <div className="davp_rni-container">
        <div className="davp_rni">
          {/* <h1>RNI Letter Issued By Goverment Of India</h1> */}
          <div className="davp_rni-heading" data-aos="fade-up-left">
            <h1>RNI Letter Issued By Goverment Of India</h1>
            <div></div>
          </div>
          <img src={image1} data-aos="fade-up-right" />
        </div>

        <div className="davp_rni">
          {/* <h1>RNI Letter Issued By Goverment Of India</h1> */}
          <div className="davp_rni-heading" data-aos="fade-up-left">
            <h1>RNI Letter Issued By Goverment Of India</h1>
            <div></div>
          </div>
          <img src={image2} className="davp_rni-image2" data-aos="fade-up-right" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DAVP_RNI;
