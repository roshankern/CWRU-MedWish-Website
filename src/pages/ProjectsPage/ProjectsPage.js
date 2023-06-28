// ProjectsPage.js
import React from "react";
import "./ProjectsPage.css"; // Import the CSS file for styling


function ProjectsPage() {
    return (
        <div className="projects-page">
            <img src="../assets/ProjectImage.png" alt="Cover Picture" />
            <hr className="line" />
            <div className="content">
                <p className="text">
                    Members of CWRU MedWish embark on ambitious projects which require the skills and experience they have acquired in class. These projects reinforce this information in an experiential way and allow members to practice planning, communication, and teamwork. Check out some of our current projects below!
                </p>
                <hr className="line" />
            </div>
            <div className="project">
                    <div className="project-content">
                        <div className="project-image">
                            <img src="../assets/Documentation.png" alt="Documentation" />
                        </div>
                        <div className="project-details">
                         <div className="heading-container">
    <h3>Documentation</h3>
    <hr className="line" />
  </div>
                            <p>The Boomerang Nebula, located roughly 5,000 light-years away from our solar system, has a temperature of 1 Kelvin (-272 °C or -460 °F) making it the coldest natural place in the universe humanity has discovered. First found in 1995 by astronomers in Chile, we have     </p>
                        </div>
                    </div>
                </div>
                <div className="project reverse-layout">
                    <div className="project-content">
                        <div className="project-image">
                            <img src="../assets/Biosensor.png" alt="Biosensor" />
                    </div>
                    <div className="project-details">
                            <div className="heading-container">
    <h3>Biosensor</h3>
                            <hr className="line" />
                            </div>
                            <p>The tenth largest city in the United States with a population of over 1 million,San José, California resides on the southernmost edge of the Silicon Valley. Though high-tech narratives often subsume this region,a closer examination of San José’s (sub)urban </p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-content">
                        <div className="project-image">
                            <img src="../assets/Placeholder1.png" alt="Placeholder1" />
                        </div>
                        <div className="project-details">
                            <div className="heading-container">
    <h3>Placeholder1</h3>
                            <hr className="line" />
                            </div>
                            <p>landscape reveals the presence of over 100 boba shopsand their multiethnic community of local patrons. Boba, a milk tea beverage which originated in Taiwan in the 1980s, made its U.S. debut in the late 1990s when Taiwanese American entrepreneurs aimed to emulate Taiwan’s unique boba</p>
                        </div>
                    </div>
                </div>
                <div className="project reverse-layout">
                    <div className="project-content">
                        <div className="project-image">
                            <img src="../assets/Placeholder2.png" alt="Placeholder2" />
                    </div>
                    <div className="project-details">
                            <div className="heading-container">
    <h3>Placeholder2</h3>
                                <hr className="line" />
                                </div>
                            <p>shop experience in their American hometowns. Over the past 20 years, boba within the United States has morphed into a distinctly Asian American cultural phenomenon, which I argue makes boba a unique lens by which to examine Asian American youth culture.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ProjectsPage;
