import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { grid } from "ldrs";
import NavBar from "../commun/Navbar";

grid.register();

function HeroSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const video = document.getElementById("background-video");
    video.onloadeddata = () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <l-grid size="150" speed="1.5" color="white"></l-grid>
        </div>
      )}
      <section
        className={`hero-section text-center ${loading ? "hidden" : ""}`}
      >
        <video
          id="background-video"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/GuessWhoLOL/video/jinx2.mp4"
          autoPlay
          loop
          muted
        ></video>
        <NavBar />

        <div className="hero-titles  md:mt-32 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-bold">
            GUESS WHO
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mt-4">
            LEAGUE OF LEGENDS EDITION
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-12 mt-10 md:mt-20">
            <Link
              to="/Game"
              className="custom-btn1 px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Play Now!
            </Link>
            <Link
              to="/ComingSoon"
              className="custom-btn2 px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Learn How To Play
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
