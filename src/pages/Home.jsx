import React from "react";
import caleb from "../imgs/caleb-test.JPG";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section>
        <div className="p-3">
          <img src={caleb} alt="caleb" className="img-fluid img-thumbnail" />
        </div>
        <div className="p-3">
          <p>
            Hi, my name is{" "}
            <h2 className="font-weight-bolder">Caleb Ojana Williams.</h2>
          </p>
          <p>I am a Software Engineer, Cinematographer and Content Creator.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
