import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Users, Zap, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/commun/Navbar";

export default function AboutPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="about-section  px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black text-gray-300 min-h-screen">
      <NavBar />
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className=" font-jersey text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-burgundy-500 to-burgundy-300">
            About Guess Who: League of Legends
          </h1>
          <p className="font-jersey25 mt-6 text-xl sm:text-3xl text-gray-400">
            Challenge your friends to guess League of Legends champions in this
            exciting guessing game!
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            data-aos="fade-up"
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 shadow-lg"
          >
            <h2 className="text-4xl font-semibold text-burgundy-400 mb-6 relative font-jersey25">
              <span className="absolute -top-3 left-0 right-0 h-px "></span>
              Game Features
            </h2>
            <ul className="space-y-4">
              {[
                {
                  icon: Shield,
                  text: "Interactive gameplay with LoL champions",
                },
                {
                  icon: Users,
                  text: "Multiple editions: Demacia, Noxus, Arcane, and more",
                },
                { icon: Zap, text: "Dynamic visuals and exciting animations" },
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 font-jersey25 text-2xl font-medium"
                >
                  <feature.icon className="w-6 h-6 text-burgundy-500" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meet the Team Section */}
          <div
            data-aos="fade-up"
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 shadow-lg"
          >
            <h2 className="text-4xl font-semibold text-burgundy-400 mb-6 font-jersey25">
              About the Creator
            </h2>
            <p className=" font-jersey25 text-justify text-2xl font-medium">
              Created by Baha, a software engineering student passionate about
              technology and coding, combining League of Legends with
              interactive gameplay.
            </p>
            <div className="mt-6">
              {/* <img
                src="/GuessWhoLOL/img/Baha.JPEG"
                alt="Baha"
                className="rounded-full border-4 border-burgundy-500 mx-auto object-cover transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{
                  width: 150,
                  height: 150,
                  objectPosition: "center top",
                }}
              /> */}
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div
          data-aos="fade-up"
          className="mt-16 bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 shadow-lg"
        >
          <h2 className="text-4xl font-semibold text-burgundy-400 mb-6 font-jersey25">
            What's Next?
          </h2>
          <p className="text-2xl font-medium mb-4 font-jersey25">
            We're working on new features and editions to make the game even
            more exciting. Stay tuned for updates and new champions!
          </p>
          <ul className="list-disc pl-6 text-2xl font-medium space-y-2 text-gray-400 font-jersey25">
            <li>New champion editions</li>
            <li>Multiplayer online mode</li>
            <li>Custom champion creator</li>
          </ul>
        </div>

        {/* Play Now Section */}
        <div className="mt-16 text-center">
          <Link
            to="/game"
            className="inline-flex items-center px-8 py-4 text-4xl font-medium text-gray-900 bg-gradient-to-r from-burgundy-500 to-burgundy-400 rounded-full hover:from-burgundy-600 hover:to-burgundy-500 transition-all duration-300 shadow-lg transform hover:scale-105 font-jersey25"
          >
            Play Now <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Social Media / Community Section */}
        <div className="mt-16 text-center">
          <p className="text-3xl text-white mb-4 font-jersey font-medium">
            Connect with me for more updates and projects!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/YngJesus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 text-2xl font-bold text-gray-900 bg-gradient-to-r from-burgundy-500 to-burgundy-400 rounded-full hover:from-burgundy-600 hover:to-burgundy-500 transition-all duration-300 shadow-lg transform hover:scale-105 font-jersey25"
            >
              GitHub
            </a>
            <a
              href="mailto:bahajedidi2016@gmail.com"
              className="px-4 py-1 text-2xl font-bold text-gray-900 bg-gradient-to-r from-burgundy-500 to-burgundy-400 rounded-full hover:from-burgundy-600 hover:to-burgundy-500 transition-all duration-300 shadow-lg transform hover:scale-105 font-jersey25"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
