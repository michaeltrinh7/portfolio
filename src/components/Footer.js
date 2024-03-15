import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = ({ userName, description, socialLabel, socials }) => {


  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>{socialLabel}</span>
            </h2>
            <div className="main-footer__social-cont">
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon} size="2x" key={url} className="main-footer__icon" />
                </a>
              ))}
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">{userName}</h4>
            <p className="main-footer__short-desc">
              {description}
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          © Copyright 2024. Made by <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Ram Maheshwari</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 