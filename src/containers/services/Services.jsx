import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./services.css";

const Services = () => (
  <div className="gpt3__blog section__padding" id="services">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        Web Application Services: <br /> Empower Your Digital Presence
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          text="Requirement Analysis"
          description="Our team begins by conducting a thorough analysis of your requirements. We excel in understanding and articulating your needs, ensuring that every feature and function of the web application is planned to meet your business objectives. Our expertise in requirement gathering and analysis sets us apart, as we meticulously document every detail to pave the way for a successful project."
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          text="Unique UI/UX Design"
          description="In the design phase, our creative team crafts visually appealing and user-friendly designs. We're experts in creating intuitive UI/UX that enhances user engagement and satisfaction."
        />
        <Article
          imgUrl={blog03}
          text="Custom Web Application Development"
          description="Our development team is second to none, comprising seasoned professionals who write clean, efficient, and scalable code. We specialize in both front-end and back-end development, utilizing the latest technologies and frameworks to build robust web applications. "
        />
        <Article
          imgUrl={blog04}
          text="Testing and Quality Assurance"
          description="Quality is our top priority. Our QA team rigorously tests the web application to identify and fix any bugs, ensuring the software runs smoothly across all devices and browsers."
        />
        <Article
          imgUrl={blog05}
          text="Deployment"
          description="Deploying a web application is a critical step, and our team excels in ensuring a smooth launch. We handle every aspect of deployment, from configuring servers to setting up databases and ensuring the application is optimized for performance."
        />
      </div>
    </div>
  </div>
);

export default Services;
