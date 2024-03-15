import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingSection = ({ greeting, description, projectSection, socials }) => (

  <section className="home-hero">
    <div className="home-hero__content">
      <h1 className="heading-primary">{greeting}</h1>
      <div className="home-hero__info">
        <p className="text-primary">
          {description}
        </p>
      </div>
      <div className="home-hero__cta">
        <a href={projectSection.href} className="btn btn--bg">{projectSection.name}</a>
      </div>
    </div>
    <div className="home-hero__socials">
      {socials.map(({ icon, url }) => (
        <div className="home-hero__social" key={"div" + url}>
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__social-icon-link"
          >
            <FontAwesomeIcon icon={icon} size="2x" key={url} className="home-hero__social-icon" />
          </a>
        </div>
      ))}
    </div>
    <div className="home-hero__mouse-scroll-cont">
      <div className="mouse"></div>
    </div>
  </section>
);

export default LandingSection;