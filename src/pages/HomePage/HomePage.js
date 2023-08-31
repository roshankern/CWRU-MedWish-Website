import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';

import HomePageImage from './images/HomePage.png';
import HomeImage1 from './images/HomeImage1.png';
import HomeImage2 from './images/HomeImage2.png';

import HeaderComponent from "../../components/HeaderComponent.js";
import "../../styles.css";
import "./HomePage.css";

function HomePage() {

  const navigate = useNavigate();
  const redirectToEvents = () => {
    navigate("/events");
  };

  const onJoinClick = () => {
    window.open("https://community.case.edu/MedWish/club_signup", "_blank");
  };

  return (
    <div className="HomePage">
      <img src={HomePageImage} className="header-image" alt="Header" />

      <div className="spacer"></div>
      <div className="spacer-line"> </div>

      <HeaderComponent title="About Us" orientation="left" />

      <Grid container spacing={3} style={{ paddingLeft: '20px', paddingRight: '20px' }} alignItems="center">
        <Grid item xs={12} md={6}>
          <div className="paragraph-text">
            <p>We are a group of Case Western Reserve University students who work with the not-for-profit organization MedWish International to repair discarded medical equipment and ship this equipment to countries in need.</p>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={HomeImage1} className="header-image" alt="Header" style={{ borderRadius: '20px' }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={HomeImage2} className="header-image" alt="Header" style={{ borderRadius: '20px' }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="paragraph-text">
            <p>CWRU MedWish takes volunteer trips downtown to the headquarters of MedWish International. We triage, test, repair and package medical devices. In addition to our regular trips, we host informational workshops for members to learn more about biomedical engineering.</p>
          </div>
        </Grid>
      </Grid>

      <div className="spacer"></div>
      <div className="spacer"></div>

      <div className="spacer-line"> </div>

      <Grid container spacing={3} style={{ paddingLeft: '20px', paddingRight: '20px' }} alignItems="center">

        <Grid item xs={12} md={6}>
          <HeaderComponent title="Help Us" orientation="left" />
          <div className="paragraph-text">
            <p>Join the CWRU MedWish club on CampusGroups to get email updates and and volunteer with us.</p>
          </div>
          <div class="form-group-message">
            <div className="form-row-message">
              <div class="form-group-message">
                <button type="button" class="submit-button" onClick={onJoinClick}>JOIN</button>
              </div>
            </div>
          </div>

        </Grid>

        <Grid item xs={12} md={6}>
          <HeaderComponent title="Schedule" orientation="left" />
          <div className="paragraph-text">
            <p>Check out our schedule to see what and when you can help! Make sure to sign up for the event on CampusGroups.</p>
          </div>
          <div className="form-group-message">
            <div className="form-row-message">
              <div className="form-group-message">
                <button type="button" class="submit-button" onClick={redirectToEvents}>SEE SCHEDULE</button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <div className="spacer"></div>
      <div className="spacer"></div>

    </div>
  );
}

export default HomePage;
