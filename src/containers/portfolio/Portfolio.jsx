import React from "react";
import "./portfolio.css";
import portfolioImg from "../../assets/possibility.png";

const Portfolio = () => {
  return (
    <section className="third-section" id="portfolio">
      <h2>Our last projects</h2>
      <p className="subtitle">This is the subtitle.</p>
      <div className="blocks-container">
        <div className="block">
          <img src={portfolioImg} />
          <p>Description of Image 1</p>
        </div>
        <div className="block">
          <img src={portfolioImg} alt="Description Image 2" />
          <p>Description of Image 2</p>
        </div>
        <div className="block">
          <img src={portfolioImg} alt="Description Image 3" />
          <p>Description of Image 3</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
