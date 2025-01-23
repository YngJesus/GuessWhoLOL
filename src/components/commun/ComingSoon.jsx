import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { grid } from "ldrs";

grid.register();

function ComingSoon() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const video = document.getElementById("coming-soon-video");
    video.onloadeddata = () => {
      setLoading(false);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <l-grid size="150" speed="1.5" color="white"></l-grid>
        </div>
      )}
      <video
        id="coming-soon-video"
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          loading ? "hidden" : ""
        }`}
        src="/GuessWhoLOL/video/comingsoon.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div
        className={`cs relative flex flex-col justify-center items-center h-screen text-white text-center px-4 ${
          loading ? "hidden" : ""
        }`}
      >
        <h1 className=" sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl font-bold mb-8">
          COMING SOON...
        </h1>
        <Link to="//" className="custom-btn1">
          Go Back!
        </Link>
      </div>
    </section>
  );
}

export default ComingSoon;
