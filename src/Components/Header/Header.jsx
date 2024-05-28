import React from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import Menu from "./Menu";
import SocialLink from "./SocialLink";
import "./Header.scss";

export default function Header({ onBurgerMenuClick }) {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <header className="header navbar navbar-expand-lg">
      <div className="container-fluid">
        <Logo />
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon mid-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Menu />
          <SocialLink isMobile={isMobile} />
        </div>
      </div>
    </header>
  );
}
