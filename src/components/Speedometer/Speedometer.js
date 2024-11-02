// src/components/Speedometer.js

import React, { useEffect, useRef } from "react";
import "./Speedometer.css"; // Import your styles

const Speedometer = ({ score }) => {
  const needleRef = useRef(null);

  useEffect(() => {
    if (needleRef.current) {
      const scoreAngle = (score / 100) * 180; // Calculate the angle for the score
      needleRef.current.style.transform = `rotate(${scoreAngle}deg)`; // Rotate the needle
    }
  }, [score]);

  return (
    <div className="speedometer">
      <svg width="200" height="100" viewBox="0 0 200 100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#ffdd57", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#28a745", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M 10 100 A 90 90 0 0 1 190 100" // Arc path for speedometer
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="15"
        />
        <line
          ref={needleRef}
          x1="100"
          y1="100"
          x2="100"
          y2="10"
          stroke="red"
          strokeWidth="3"
          style={{ transition: "transform 1s ease" }} // Animate needle transition
        />
      </svg>
      <div className="score-label">{score}/100</div>
    </div>
  );
};

export default Speedometer;
