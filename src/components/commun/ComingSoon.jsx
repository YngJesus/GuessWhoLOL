import React from "react";
import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <section>
      {" "}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/GuessWhoLOL/video/comingsoon.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="cs relative  flex flex-col justify-center items-center h-screen text-white">
        COMING SOON
        <Link to="/" className="custom-btn1">
          Go Back!
        </Link>
      </div>
    </section>
  );
}

export default ComingSoon;
