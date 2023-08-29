import React from "react";
import Typography from "@mui/material/Typography";

import HomePageImage from './images/HomePage.png';
import HomeImage1 from './images/HomeImage1.JPG';
import HomeImage2 from './images/HomeImage2.png';

import HeaderComponent from "../../components/HeaderComponent.js";
import "../../styles.css";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <img src={HomePageImage} className="header-image" alt="Header" />

      <div className="spacer"></div>
      <div className="spacer-line"> </div>

      <HeaderComponent title="About Us" orientation="left" />

      <div className="paragraph-text">
        <p>CWRU MedWish promotes healthcare equity on an international scale assisting MedWish International in processing medical devices. Our priority is to increase access to healthcare globally by repurposing locally donated medical equipment. CWRU MedWish assists in repairing and packaging priority medical devices for use in underserved regions. Our methods of device processing are based on a comprehensive and officially verified understanding of medical device guidelines.</p>
      </div>

      <img src={HomeImage1} className="header-image" alt="Header" />

      <div className="paragraph-text">
        <p>CWRU MedWish promotes healthcare equity on an international scale assisting MedWish International in processing medical devices. Our priority is to increase access to healthcare globally by repurposing locally donated medical equipment. CWRU MedWish assists in repairing and packaging priority medical devices for use in underserved regions. Our methods of device processing are based on a comprehensive and officially verified understanding of medical device guidelines.</p>
      </div>

      <img src={HomeImage2} className="header-image" alt="Header" />



      <div className="spacer-line"> </div>
      <div className="spacer"></div>
    </div>
  );
}

export default HomePage;
