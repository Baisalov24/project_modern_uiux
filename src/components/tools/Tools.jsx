import React from "react";
import { useState, useEffect } from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./tools.css";
const logos = [google, slack, atlassian, dropbox, shopify];

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
        {/* Дублируем логотипы для бесконечной анимации */}
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
