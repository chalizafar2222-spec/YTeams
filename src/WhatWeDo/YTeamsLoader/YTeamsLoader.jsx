import React from "react";
import "./YTeamsLoader.css"; // we’ll keep animations in a separate CSS file

const YTeamsLoader = () => {
  return (
    <div className="loader">
      <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
        <defs>
          <linearGradient id="b" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#973BED" />
            <stop stopColor="#007CFF" offset="1" />
          </linearGradient>

          <linearGradient id="c" x1="0" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC800" />
            <stop stopColor="#F0F" offset="1" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              dur="8s"
              values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
              keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
              keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
              repeatCount="indefinite"
            />
          </linearGradient>

          <linearGradient id="d" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E0ED" />
            <stop stopColor="#00DA72" offset="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Left Loader Shape */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path
          stroke="url(#b)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="360"
          d="M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 a 2.0002,2.0002 0 0 0 0.02344,0 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 z"
          className="dash"
        />
      </svg>

      {/* Middle Spinner */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path
          stroke="url(#c)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="360"
          d="M 32 32 m 0 -27 a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
          className="spin"
        />
      </svg>

      <div className="w-2"></div>

      {/* Right Loader Shape */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path
          stroke="url(#d)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="360"
          d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z"
          className="dash"
        />
      </svg>
    </div>
  );
};

export default YTeamsLoader;
