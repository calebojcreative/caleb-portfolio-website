import React from "react";
import caleb from "../imgs/caleb-1.JPG";
import Social from "../components/Social";

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <img src={caleb} alt="caleb" className="hero-img" />
        </div>
        <div className="hero-content">
          <p className="hero-text">
            Hi, my name is
            <h2 className="font-weight-bolder important subject">
              Caleb Ojana Williams.
            </h2>
            I'm a Software Developer, Cinematographer and Content Creator.
          </p>
          <Social />
        </div>
      </section>
    </>
  );
}

export default Home;
