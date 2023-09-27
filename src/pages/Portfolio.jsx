import React from "react";
import OBQ from "../imgs/OBQ.png";
import Omnifood from "../imgs/Omnifood.png";
import { FaGlobe, FaGithub } from "react-icons/fa";
import Copyright from "../components/Copyright";

function Portfolio() {
  return (
    <>
      <div className="container-fluid pt-5">
        <h3 className="small font-weight-bolder">PROJECTS</h3>
        <div className="pt-3">
          <div className="p-3 border portfolio">
            <div className="portfolio-info">
              <h4 className="font-weight-bolder text-center important portfolio-subject">
                Ojana Bible Quiz
              </h4>
              <p className="portfolio-text">
                Interactive quiz application for enthusiasts of The Holy Bible.
                This is a mobile-first web application to test the knowledge of
                Bible students and sharpen their general knowledge of the Bible.
              </p>
              <div>
                <ul className="list-group list-group-horizontal list-group-flush ">
                  <li className="list-group-item border-0">
                    <a href="https://github.com/calebojcreative/bible-quiz">
                      <FaGithub />
                    </a>
                  </li>
                  <li className="list-group-item border-0">
                    <a href="https://ojanabiblequiz.netlify.app/">
                      <FaGlobe />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src={OBQ}
              alt="ojana-bible-quiz"
              className="img-thumbnail portfolio-img"
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="p-3 border portfolio">
            <div className="portfolio-info">
              <h4 className="font-weight-bolder text-center important portfolio-subject">
                Omnifood Website
              </h4>
              <p className="portfolio-text">
                Responsive website for a food courier service. This is a website
                to exhibit and deliver meal plans to customers suited to their
                needs.
              </p>
              <div>
                <ul className="list-group list-group-horizontal list-group-flush ">
                  <li className="list-group-item border-0">
                    <a href="#">
                      <FaGithub />
                    </a>
                  </li>
                  <li className="list-group-item border-0">
                    <a href="https://omnifood-ojana.netlify.app/">
                      <FaGlobe />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src={Omnifood}
              alt="omnifood"
              className="img-thumbnail portfolio-img"
            />
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
}

export default Portfolio;
