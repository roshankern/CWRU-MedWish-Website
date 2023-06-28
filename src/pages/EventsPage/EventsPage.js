// EventsPage.js
import React from "react";
import "./EventsPage.css"; // Import the CSS file for styling


function EventsPage() {
    return (
        <div className="events-page">
            <img src="../assets/EventImage.png" alt="Cover Picture" />
            <hr className="line" />
            <div className="content">
                <p className="text">
CWRU MedWish is active year round! Check out some of our upcoming events below to see how you can help your community and the world. More information about upcoming events can be found at the CWRU MedWish CampusGroup page:
https://community.case.edu/medwish/home                </p>
                <hr className="line" />
            </div>
        </div>
    );
}

export default EventsPage;
