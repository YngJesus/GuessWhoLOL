import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <section className="hero-section text-center   ">
        <video
          className="absolute top-0 left-0"
          src="/GuessWhoLOL/video/jinx2.mp4"
          autoPlay
          loop
          muted
        ></video>
        <nav className=" relative bg-transparent p-4 flex  justify-center">
          <div className="custom-navbar  flex flex-row gap-32">
            <div>
              <Link className="text-white " to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="text-white" to="/ComingSoon">
                How To Play
              </Link>
            </div>
            <div>
              <Link className="text-white" to="/ComingSoon">
                About
              </Link>
            </div>
            <div>
              <Link className="text-white" to="/ComingSoon">
                Editions
              </Link>
            </div>
          </div>
        </nav>
        <div className="hero-titles mt-32">
          <h1 className="leading-none">GUESS WHO</h1>
          <p className="leading-none">LEAGUE OF LEGENDS EDITION</p>
          <div className="space-x-12 mt-20">
            <Link to="/Game" className="custom-btn1">
              Play Now!
            </Link>
            <Link to="/ComingSoon" className="custom-btn2">
              Learn How To Play
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
