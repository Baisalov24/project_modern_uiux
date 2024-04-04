import React from "react";
import "./portfolio.css";
import project_1 from '../../assets/project_1.png'
import project_2 from '../../assets/project_2.png'
import project_3 from '../../assets/project_3.png'


const Portfolio = () => {
  return (
    <section className="third-section" id="portfolio">
      <h1 className="gradient__text portfolio_title">Website Templates</h1>
      <h2 className="gradient__text portfolio_subtitle">
      Discover Modern Websites
      </h2>
      <div class="blocks-container">
        <div class="block">
          <img src={project_1} alt="Image 1" />
          <p>Photo description 1</p>
          <a href="https://yoga-studio-website.vercel.app/" class="button">
          Visit
          </a>
        </div>
        <div class="block">
          <img src={project_2} alt="Image 2" />
          <p>photo description 2</p>
          <a href="link2" class="button">
          Visit
          </a>
        </div>
        <div class="block">
          <img src={project_3} alt="Image 3" />
          <p>photo description 3</p>
          <a href="https://headphone-maket.vercel.app/" class="button">
          Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
