import React from "react";

const Project = ({ title, description, getImageSrc, projectDetail, projectLink }) => {
  return (
    <div className="projects__row">
      <div className="projects__row-img-cont">
        <img src={getImageSrc()} alt="Software Screenshot" className="projects__row-img" loading="lazy" />
      </div>
      <div className="projects__row-content">
        <h3 className="projects__row-content-title">{title}</h3>
        <p className="projects__row-content-desc"  dangerouslySetInnerHTML={{ __html: description}}>
        </p>
        <a href={projectLink} className="btn btn--med btn--theme dynamicBgClr" target="_blank">{projectDetail}</a>
      </div>
    </div>
  );
};

export default Project;