import React from "react";
import caleb from "../imgs/caleb-2.jpg";
import Copyright from "../components/Copyright";

function About() {
  return (
    <>
      <section>
        <h2 className="pt-5 pl-3 small font-weight-bolder">ABOUT ME</h2>
        <div className="about">
          <div className="about-img">
            <img src={caleb} alt="caleb-about" className="about-img pt-2" />
          </div>
          <div className="about-info">
            <h2 className="pt-2 font-weight-bolder important subject">
              Hi, I'm Caleb
            </h2>
            <p>
              My name is Caleb Williams. I’m a Cinematographer and a Frontend
              Developer based in Lagos, Nigeria.
            </p>
            <p>
              I started my coding journey in 2020 as a frontend developer but
              was not as swift in meeting my goals due to my engagements with
              Cinematography.
            </p>
            <p>
              Apart from numerous video shoots, I shot my first major
              Cinematography project in 2021. It was a YouTube movie series
              titled, ‘YOUNG LOVE’ for DEGENERAL FILM.
            </p>
            <p>
              In October 2021, I graduated from the University of Benin, with a
              B.Sc in Computer Science and decided to focus on my coding goals
              more.
            </p>
            <p>
              In 2022, I completed Web Development courses on JavaScript, HTML &
              CSS as well as ReactJS. I proceeded to build personal projects
              including a responsive website for a food courier service and an
              interactive Bible quiz application for Bible enthusiasts to test
              their knowledge of the Bible.
            </p>
            <p>
              In 2023, I shot another major Cinematography project. It was also
              a YouTube movie series, titled ‘DIRT TRIP’ for DEGENERAL FILM.
            </p>
            <p>
              When I’m not shooting/editing videos or developing websites/web
              applications, I enjoy playing video games, cooking, playing
              soccer, working out and helping other people be their best selves.
            </p>
          </div>
        </div>
        <Copyright />
      </section>
    </>
  );
}

export default About;
