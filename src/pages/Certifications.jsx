import React from "react";
import Copyright from "../components/Copyright";

function Certifications() {
  return (
    <>
      <div className="p-4" id="accordion">
        <div className="p-3">
          <h3 className="small font-weight-bolder">CERTIFICATIONS</h3>
        </div>
        <div class="card">
          <div class="card-header">
            <a class="card-link" data-toggle="collapse" href="#collapseOne">
              The Complete Javascript Course
            </a>
          </div>
          <div id="collapseOne" class="collapse show" data-parent="#accordion">
            <div class="card-body">
              <h5>The Complete Javascript Course 2022: From Zero to Expert!</h5>
              <p>
                Issued by: <span className="font-weight-bolder">Udemy</span> ,
                Feb 2022{" "}
                <a href="https://drive.google.com/drive/folders/1qtpaO6S6q79DO6W1TAn58HTCowTEHBIQ?usp=drive_link">
                  show credential
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <a
              class="collapsed card-link"
              data-toggle="collapse"
              href="#collapseTwo"
            >
              Responsive Websites With HTML & CSS
            </a>
          </div>
          <div id="collapseTwo" class="collapse" data-parent="#accordion">
            <div class="card-body">
              <h5>Build Responsive Real-World Websites with HTML and CSS</h5>
              <p>
                Issued by: <span className="font-weight-bolder">Udemy</span> ,
                May 2022{" "}
                <a href="https://drive.google.com/drive/folders/1qtpaO6S6q79DO6W1TAn58HTCowTEHBIQ?usp=drive_link">
                  show credential
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <a
              class="collapsed card-link"
              data-toggle="collapse"
              href="#collapseThree"
            >
              React Front To Back
            </a>
          </div>
          <div id="collapseThree" class="collapse" data-parent="#accordion">
            <div class="card-body">
              <h5>React Front to Back 2022</h5>
              <p>
                Issued by: <span className="font-weight-bolder">Udemy</span> ,
                Nov 2022{" "}
                <a href="https://drive.google.com/drive/folders/1qtpaO6S6q79DO6W1TAn58HTCowTEHBIQ?usp=drive_link">
                  show credential
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Copyright />
      </div>
    </>
  );
}

export default Certifications;
