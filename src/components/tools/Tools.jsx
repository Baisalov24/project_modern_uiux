import React from "react";
import { react, angular, bootstrap, mocha, docker, github } from "./imports";
import "./tools.css";
const logos = [react, angular, bootstrap, mocha, docker, github];

const Tools = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            key={index}
            className="carousel-logo"
          />
        ))}

        {logos.map((logo, index) => (
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            key={`duplicate-${index}`}
            className="carousel-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
