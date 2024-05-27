import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import SocialLink from "./SocialLink";
import "./Header.scss";

export default function Header({ onBurgerMenuClick }) {
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
          <SocialLink />
        </div>
      </div>
    </header>
  );
}
