// import React, { useEffect, useState } from "react";

// function GithubBtn() {
//   const [stars, setStars] = useState(0);

//   useEffect(() => {
//     const fetchStars = async () => {
//       try {
//         const response = await fetch(
//           "https://api.github.com/repos/YngJesus/GuessWhoLOL"
//         );
//         const data = await response.json();
//         setStars(data.stargazers_count);
//       } catch (error) {
//         console.error("Failed to fetch stars:", error);
//       }
//     };
//     fetchStars();
//   }, []);

//   return (
//     <div className="fixed bottom-4 right-4">
//       <div className="relative group">
//         <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
//           <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
//           <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
//             <div className="relative z-10 flex items-center space-x-3">
//               <a
//                 href="https://github.com/YngJesus/GuessWhoLOL"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center space-x-1"
//               >
//                 <img
//                   className="h-8 "
//                   src="/GuessWhoLOL/img/Github.png"
//                   alt="Github Logo"
//                 />
//                 <span className="flex items-center text-xl space-x-1 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-blue-500">
//                   Star on GitHub |{" "}
//                   <img
//                     className="h-4 mx-2"
//                     src="/GuessWhoLOL/img/star.png"
//                     alt=""
//                   />
//                   {stars}
//                 </span>
//               </a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-blue-500"
//               >
//                 <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
//               </svg>
//             </div>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default GithubBtn;
"use client";

import { useEffect, useState } from "react";
import { Bomb } from "lucide-react";

function GithubBtn() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/YngJesus/GuessWhoLOL"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Failed to fetch stars:", error);
      }
    };
    fetchStars();
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <div className="relative group">
        <button className="relative inline-block p-px font-bold leading-6 text-white bg-jinx-pink shadow-2xl cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 hover:shadow-jinx-blue/50">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-jinx-pink via-jinx-purple to-jinx-blue p-[3px] opacity-75 transition-opacity duration-500 group-hover:opacity-100 animate-pulse"></span>
          <span className="relative z-10 block px-6 py-3 rounded-full bg-jinx-dark">
            <div className="relative z-10 flex items-center space-x-2">
              <a
                href="https://github.com/YngJesus/GuessWhoLOL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Bomb className="h-8 w-8 text-jinx-yellow animate-bounce" />
                <span className="flex items-center text-xl space-x-1 transition-all duration-500 group-hover:translate-x-1 group-hover:text-jinx-yellow">
                  BOOM on GitHub! |{" "}
                  <span className="inline-block animate-spin text-jinx-blue mx-1">
                    ✦
                  </span>
                  {stars}
                </span>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-jinx-yellow animate-pulse"
              >
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
              </svg>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export default GithubBtn;
