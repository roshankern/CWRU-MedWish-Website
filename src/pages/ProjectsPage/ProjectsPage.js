import React, { useState, useEffect } from "react";
import ProjectCard from './ProjectCard';
import ProjectImage from './images/ProjectImage.png';
import FadeInComponent from "../../components/FadeInComponent.js";

import "./ProjectsPage.css";
import "../../styles.css";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  const convertDriveLink = (url) => {
    let imageId = url.split('/').slice(-2)[0];
    return `https://drive.google.com/uc?export=view&id=${imageId}`;
  };

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/26zl0s3h1avn3")
      .then(response => response.json())
      .then(data => {
        const convertedData = data.map(project => ({
          ...project,
          image_link: convertDriveLink(project.image_link),
        }));
        setProjects(convertedData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="ProjectsPage">
      <FadeInComponent>
        <img src={ProjectImage} className="header-image" alt="Header" />
      </FadeInComponent>

      <div className="spacer"></div>
      <div className="spacer-line"> </div>

      <div className="paragraph-text">
        <p>Members of CWRU MedWish embark on ambitious projects which require the skills and experience they have acquired in class. These projects reinforce this information in an experiential way and allow members to practice planning, communication, and teamwork. Check out some of our current projects below!</p>
      </div>

      <div className="spacer-line"></div>
      <div className="spacer"></div>

      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}

export default ProjectsPage;
