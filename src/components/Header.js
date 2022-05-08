import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <img src="/images/bdglogo.png" alt="logo" />
        <nav>
          <Link class="link-text" to="/">
            About Me
          </Link>
          <Link class="link-text" to="/portfolio">
            Portfolio
          </Link>
          <Link class="link-text" to="/contact">
            Contact
          </Link>
          <Link class="link-text" to="/resume">
            Resume
          </Link>
        </nav>
      </header>
    </>
  );
}
