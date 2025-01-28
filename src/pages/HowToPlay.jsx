import { grid } from "ldrs";
import React, { useEffect, useState } from "react";
import SplitText from "../components/commun/SplitText";
import NavBar from "../components/commun/Navbar";
grid.register();

function HowToPlay() {
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
        <div className="flex justify-center items-center min-h-screen">
          <l-grid size="150" speed="1.5" color="white"></l-grid>
        </div>
      )}

      <section
        className={`hero-section px-8 text-center ${loading ? "hidden" : ""}`}
      >
        <video
          id="background-video"
          className="absolute top-0 left-0 w-full h-full object-cover "
          src="/GuessWhoLOL/video/Pyke.mp4"
          autoPlay
          loop
          muted
        ></video>
        <NavBar />
        <div className="relative px-4 sm:px-6 lg:px-8">
          <h1 className="font-jersey text-white mt-4 text-4xl sm:text-6xl  md:text-7xl lg:text-8xl  xl:text-8xl  leading-none font-bold">
            HOW TO PLAY
          </h1>
          <SplitText
            text="A fun guessing game for you and your friends!"
            className="font-jersey25 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
            delay={60}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10">
          <div className="rounded-xl backdrop-blur border-2 border-black p-4 flex flex-col items-center">
            <h1 className="text-white font-jersey25 text-2xl sm:text-3xl">
              Step 1: Choose Your Champion
            </h1>
            <img
              src="/GuessWhoLOL/img/htp-card1.png"
              alt="Card1"
              className="h-48 sm:h-64 mt-8  sm:mb-10"
            />
            <h4 className="text-white font-jersey25 text-lg sm:text-2xl">
              Pick a League champion secretly. Don't tell your friend!
            </h4>
          </div>
          <div className="rounded-xl backdrop-blur border-2 border-black p-4 flex flex-col items-center">
            <h1 className="text-white font-jersey25 text-2xl sm:text-3xl">
              Step 2: Ask Questions
            </h1>
            <img
              src="/GuessWhoLOL/img/thinkingbbl.png"
              alt="Thinking Bubble"
              className="mt-8"
            />
            <div className="text-left w-full space-y-1 mb-8 sm:mb-16 mt-10">
              <p className="text-base sm:text-lg text-white font-jersey25">
                Can your champion summon creatures or objects?
              </p>
              <p className="text-base sm:text-lg text-white font-jersey25">
                Does your champion deal physical damage?
              </p>
              <p className="text-base sm:text-lg text-white font-jersey25">
                Is your champion a mage?
              </p>
            </div>
            <h4 className="text-white font-jersey25 text-lg sm:text-2xl">
              Take turns asking yes/no questions to uncover clues.
            </h4>
          </div>
          <div className="rounded-xl backdrop-blur border-2 border-black p-4 flex flex-col items-center">
            <h1 className="text-white font-jersey25 text-2xl sm:text-3xl">
              Step 3: Make Your Guess
            </h1>
            <div className="relative">
              <img
                src="/GuessWhoLOL/img/htp-card2.png"
                alt="Card2"
                className="h-48 sm:h-64 mt-8 mb-10"
              />
              <img
                src="/GuessWhoLOL/img/FP.png"
                alt="Pointing Finger"
                className="absolute top-24 sm:top-40 left-16 sm:left-24 transform -rotate-45"
              />
            </div>
            <h4 className="text-white font-jersey25 text-lg sm:text-2xl">
              After narrowing it down, make your final guess!
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowToPlay;
