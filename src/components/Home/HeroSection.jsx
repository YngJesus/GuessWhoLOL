import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { grid } from "ldrs";
import NavBar from "../commun/Navbar";
import SplashCursor from "../commun/SplashCursor";
import GithubBtn from "../commun/GithubBtn";
import SplitText from "../commun/SplitText";
import "../../App.css";

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
        className={`hero-section px-8 text-center ${loading ? "hidden" : ""}`}
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
          <h1 className="text-4xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-9xl leading-none font-bold">
            GUESS WHO
          </h1>
          <SplitText
            text=" LEAGUE OF LEGENDS EDITION"
            className="text-lg sm:text-xl md:text-9xl lg:text-9xl xl:text-9xl leading-none mt-4"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          {/* <p className="text-lg sm:text-xl md:text-9xl lg:text-9xl xl:text-9xl leading-none mt-4">
            LEAGUE OF LEGENDS EDITION
          </p> */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-12 mt-10 md:mt-20">
            <Link
              to="/Game"
              className="custom-btn1 px-6 py-3 text-sm sm:text-3xl md:text-3xl lg:text-3xl"
            >
              Play Now!
            </Link>
            <Link
              to="/HowToPlay"
              className="custom-btn2 px-6 py-3 text-sm sm:text-3xl md:text-3xl lg:text-3xl"
            >
              Learn How To Play
            </Link>
          </div>
        </div>
        <div className="relative  bottom-4 right-4 flex items-center space-x-2">
          <GithubBtn />
        </div>
      </section>
      <SplashCursor />
    </>
  );
}

export default HeroSection;
