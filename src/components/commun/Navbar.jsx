import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container bg-transparent p-4 flex  justify-center">
      <div className="custom-navbar  flex flex-row gap-32">
        <div>
          <Link className="text-white " to="#home">
            Home
          </Link>
        </div>
        <div>
          <Link className="text-white" to="#How To Play">
            How To Play
          </Link>
        </div>
        <div>
          <Link className="text-white" to="#About">
            About
          </Link>
        </div>
        <div>
          <Link className="text-white" to="#Editions">
            Editions
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
