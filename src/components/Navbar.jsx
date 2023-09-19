import React from "react";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-md bg-light navbar-light shadow-sm">
      <a class="navbar-brand font-weight-bolder" href="/">
        CALEB
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/certifications">
              Certifications
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
