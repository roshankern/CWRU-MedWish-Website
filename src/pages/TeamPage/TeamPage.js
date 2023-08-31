// AboutPage.js 
import React, { useState, useEffect, useRef } from "react";
import { Card, Typography, Grid, CardContent } from '@mui/material';
import teamHeaderImage from './images/TeamHeaderPhoto.png';
import linkedInImage from './images/linkedInImage.png';
import TeamCard from './TeamCard';
import emailjs from 'emailjs-com';

import "./TeamPage.css";
import HeaderComponent from "../../components/HeaderComponent.js";
import "../../styles.css";

function TeamPage() {

  const contactUs_link = "cwrumedwish-exec@case.edu";

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3m98i5g', 'template_8e857lb', form.current, 'IzIVja4KQkgUBxeDk')
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent, thank you!");
        },
        (error) => {
          console.log(error.text);
          alert("Message send error. Please refresh and try again.", error);
        }
      );
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "	https://sheetdb.io/api/v1/i5h3kdf9o09sd"
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEvents();
  }, []);

  const DevProfileCard = ({ name, role, linkedin_link }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div>
          <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
            <img src={linkedInImage} alt={`${name}'s LinkedIn`} style={{ width: '50px', height: '50px' }} />
          </a>
          <div style={{ margin: '0' }}>
            <h3 style={{ margin: '10px' }}>{name}</h3>
            <p style={{ margin: '0' }}>{role}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="TeamPage">

      <img src={teamHeaderImage} className="header-image" alt="Header" />

      <div className="spacer"></div>
      <div className="spacer-line"> </div>

      <div className="paragraph-text">
        <p>CWRU MedWish is empowered by its executive board, faculty advisors, MedWish International mentors, and all of its members! Check out our team below.</p>
      </div>

      <div className="spacer-line"></div>
      <div className="spacer"></div>

      <HeaderComponent title="CWRU MedWish Team" orientation="left" />

      <div className="images-title-spacer"></div>
      <div className="spacer"></div>

      <Card>
        <CardContent>
          <Typography variant="h4">{ }</Typography>
          <Grid container spacing={2} className="card-container">

            {events.map((event) => (
              <Grid item key={event.id} xs="auto" sm="auto" md="auto">
                <TeamCard
                  name={event.name}
                  position={event.position}
                  linkedin_link={event.linkedin_link}
                  mailto_link={event.mailto_link}
                  image_link={event.image_link}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <div className="spacer"></div>
      <div className="spacer-line"> </div>
      <div className="spacer"></div>

      <HeaderComponent title="Website Developers" orientation="right" />

      <Grid container spacing={2} className="card-container">

        <Grid item xs="auto" sm="auto" md="auto">
          <DevProfileCard
            name="Roshan Kern"
            role="Project Manager"
            linkedin_link="https://www.linkedin.com/in/roshan-kern-9339b9221/"
          />
        </Grid>

        <Grid item xs="auto" sm="auto" md="auto">
          <DevProfileCard
            name="Zoe Goldberg"
            role="ACMW Ambassador"
            linkedin_link="https://www.linkedin.com/in/zmgoldberg/"
          />
        </Grid>

        <Grid item xs="auto" sm="auto" md="auto">
          <DevProfileCard
            name="Arohi Mehta"
            role="ACMW Ambassador"
            linkedin_link="https://www.linkedin.com/in/arohi-mehta/"
          />
        </Grid>

        <Grid item xs="auto" sm="auto" md="auto">
          <DevProfileCard
            name="Khanh Khuat"
            role="Programmer"
            linkedin_link="https://www.linkedin.com/in/404/"
          />
        </Grid>

        <Grid item xs="auto" sm="auto" md="auto">
          <DevProfileCard
            name="Jaiden Borowski"
            role="Programmer"
            linkedin_link="https://www.linkedin.com/in/jaiden-borowski/"
          />
        </Grid>

        <Grid item xs="auto" sm="auto" md="auto">
          <DevProfileCard
            name="Shravani Suram"
            role="Programmer"
            linkedin_link="https://www.linkedin.com/in/shravani-suram"
          />
        </Grid>

        <Grid item xs="auto" sm="auto" md="auto">
          <DevProfileCard
            name="Jessica Shue"
            role="Designer"
            linkedin_link="https://www.linkedin.com/in/jessica-s-7b7935268/"
          />
        </Grid>

      </Grid>

      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer-line"> </div>
      <div className="spacer"></div>


      <HeaderComponent title="Contact Us" orientation="left" />

      <div className="email-link">
        <a href={`mailto:${contactUs_link}`}>cwrumedwish-exec@case.edu</a>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>

      <div class="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required></input>
            </div>

            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required></input>
            </div>
          </div>

          <div className="spacer"></div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email ID</label>
              <input type="email" id="email" name="email" required></input>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required></input>
            </div>
          </div>

          <div className="spacer"></div>


          <div class="form-group-message">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your Message"
              required
            ></textarea>
          </div>

          <div className="spacer"></div>

          <div class="form-group-message">
            <div className="form-row-message">
              <div class="form-group-message">
                <button type="submit" class="submit-button">SEND MESSAGE</button>
              </div>
            </div>
          </div>

        </form>

      </div>

      <div className="spacer"></div>

    </div>
  );
}

export default TeamPage;