import React from "react";
import HomePageImage from './images/homepage-image_photo_noise2_scale_cropped_photo_noise2_scale.png';

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
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value (0.5) to control darkness
};

const textStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Work Sans, sans-serif",
  color: "white",
  fontSize: "52px",
  fontWeight: "bold",
  zIndex: 1,
};

function TopImage() {
  return (
    <div style={imageContainerStyle}>
      <img
        src={HomePageImage} 
        alt="Home Page Image"
        style={imageStyle}
      />
      <div style={overlayStyle}></div>
      <h1 style={textStyle}>CWRU Medwish</h1>
    </div>
  );
}

export default TopImage;
