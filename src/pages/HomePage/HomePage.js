import React from "react";
import HomePageImage from './images/homepage-image_photo_noise2_scale_cropped_photo_noise2_scale.png';
import Typography from "@mui/material/Typography";
import "./HomePage.css"; // Import the CSS file for additional styling

const imageContainerStyle = {
  position: "relative",
  width: "100%",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)", 
  zIndex: 1,
};

const textStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Work Sans, sans-serif",
  color: "white",
  fontSize: "65px", 
  fontWeight: "400",
  textAlign: "center",
  zIndex: 1,
};

const subtextStyle = {
  position: "absolute",
  bottom: "30px", 
  width: "100%", 
  fontFamily: "Work Sans, sans-serif",
  color: "white",
  fontSize: "16px", 
  zIndex: 1,
  textAlign: "center", 
  whiteSpace: "nowrap", 
};

function HomePage() {
  return (
    <div style={imageContainerStyle}>
      <img src={HomePageImage} alt="Home Page Image" style={imageStyle} />
      <div style={overlayStyle} />
      <Typography variant="h3" style={textStyle}>
        CWRU Medwish
      </Typography>
      <Typography variant="h6" style={subtextStyle}>
        &gt; 800 members + alumni   <span className="solid-line"></span>   &gt; 100 events completed
      </Typography>
    </div>
  );
}

export default HomePage;
