import React from "react";
import HomePageImage from './images/HomePage.png';
import Typography from "@mui/material/Typography";

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

      <div className="spacer-line"> </div>
      <div className="spacer"></div>
    </div>
  );
}

export default HomePage;
