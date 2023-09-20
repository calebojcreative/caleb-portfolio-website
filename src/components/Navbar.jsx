import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  const onClickAbout = () => {
    navigate("/about");
  };

  const onClickPortfolio = () => {
    navigate("/portfolio");
  };

  const onClickCertifications = () => {
    navigate("/certifications");
  };

  return (
    <nav class="navbar navbar-expand-md bg-light navbar-light shadow-sm">
      <div onClick={onClick} class="navbar-brand font-weight-bolder">
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
            <div class="nav-link" onClick={onClickAbout}>
              About
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={onClickPortfolio}>
              Portfolio
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={onClickCertifications}>
              Certifications
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
