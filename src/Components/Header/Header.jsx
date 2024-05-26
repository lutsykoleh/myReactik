import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import SocialLink from "./SocialLink";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Menu />
      <SocialLink />
    </header>
  );
}
