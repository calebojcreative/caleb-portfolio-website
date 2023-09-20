import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-md bg-light navbar-light shadow-sm">
      <div
        onClick={() => navigate("/")}
        class="navbar-brand font-weight-bolder"
      >
        CALEB
      </div>

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
            <div class="nav-link" onClick={() => navigate("/about")}>
              About
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={() => navigate("/portfolio")}>
              Portfolio
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={() => navigate("/certifications")}>
              Certifications
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
