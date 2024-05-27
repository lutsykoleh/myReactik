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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <Menu />
          <SocialLink isMobile={isMobile} />
        </div>
      </div>
    </header>
  );
}
