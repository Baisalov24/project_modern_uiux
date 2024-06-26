import React from "react";
import "./portfolio.css";
import project_1 from "../../assets/project_1.png";
import project_2 from "../../assets/project_2.png";
import project_3 from "../../assets/project_3.png";

const Portfolio = () => {
  return (
    <section className="third-section" id="portfolio">
      <h1 className="gradient__text portfolio_title">Website Templates</h1>
      <h2 className="gradient__text portfolio_subtitle">
        Discover Modern Websites
      </h2>
      <div className="blocks-container">
        <div className="block">
          <img src={project_1} alt="Project-1" />
          <a href="https://yoga-studio-website.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="portfolio_btn"> Visit</button>
          </a>
        </div>
        <div className="block">
          <img src={project_2} alt="Project-2" />
          <a href="https://gym-template-gold.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="portfolio_btn"> Visit</button>
          </a>
        </div>
        <div className="block">
          <img src={project_3} alt="Project-3" />
          <a href="https://headphone-maket.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="portfolio_btn"> Visit</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
