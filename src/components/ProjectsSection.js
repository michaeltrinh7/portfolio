import React from "react";
import Project from "./Project";

const ProjectsSection = ({ sectionName, sectionDescription, projects }) => {
  return (

    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">{sectionName}</span>
          <span className="heading-sec__sub">
            {sectionDescription}
          </span>
        </h2>

        <div className="projects__content">
          {projects.map((project) => (
            <Project {...project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;