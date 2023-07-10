// TeamPage.js
import React from "react";
import "./TeamPage.css"; 
import TeamHeaderPhoto from "./images/TeamHeaderPhoto.png"; // add this line

function TeamPage() {
    return (
        <div className="TeamPage"> 
            <header className="TeamPage-header">
                <div className="image-overlay"></div> 
                <img
                    style={{ width: "100%", height: "auto" }}
                    src={TeamHeaderPhoto} // use the imported image here
                    alt="Header"
                />

                <div className="team-text">
                <h1>Team</h1>
                </div>
            </header> 

            <div className="spacer"></div>

            <div className="spacer-line"> </div>
                
            <div className="horizontal-center-text">
                <p>CWRU MedWish is empowered by its executive board, faculty advisors, MedWish International mentors, and all of its members! Check out our team below.</p>
            </div>

            <div className="spacer-line"> </div>
            
            <div className="spacer"></div>

        </div>
    ); 
}

export default TeamPage;