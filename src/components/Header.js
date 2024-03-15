import React from "react";
import Menus from './Menus';

import hamMenu from "../assets/svg/ham-menu.svg";
import hamMenuClose from "../assets/svg/ham-menu-close.svg";

export default function Header({ userName, menus, getAvatar }) {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={getAvatar()}
              alt="Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">{userName}</span>
        </div>
        <div className="header__main">
          <Menus menus={menus} ulClass="header__links" liClass="header__link-wrapper" aClass="header__link" />
          <div className="header__main-ham-menu-cont">
            <img
              src={hamMenu}
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src={hamMenuClose}
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <Menus menus={menus} ulClass="header__sm-menu-links" liClass="header__sm-menu-link" aClass="header__link" />
        </div>
      </div>
    </header>
  );
};