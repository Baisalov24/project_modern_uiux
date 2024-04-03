import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        Web Application Services: <br /> Empower Your Digital Presence
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          text="Unique UI/UX Design"
          description="Our design team focuses on creating intuitive and aesthetically pleasing interfaces that provide seamless user experiences..."
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          text="Unique UI/UX Design"
          description="Our design team focuses on creating intuitive and aesthetically pleasing interfaces that provide seamless user experiences..."
        />
        <Article
          imgUrl={blog03}
          text="Custom Web Application Development"
          description="We craft bespoke web applications tailored to your unique business needs, ensuring they're scalable, responsive, and user-friendly..."
        />
        <Article
          imgUrl={blog04}
          text="E-Commerce Solutions"
          description="From online storefronts to complex B2B platforms, we build e-commerce systems that are secure, intuitive, and conversion-focused..."
        />
        <Article
          imgUrl={blog05}
          text="Maintenance and Support"
          description=" Beyond development, we offer ongoing maintenance and support to ensure your web application remains up-to-date and operates smoothly..."
        />
      </div>
    </div>
  </div>
);

export default Blog;
