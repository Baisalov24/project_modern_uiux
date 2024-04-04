import React from "react";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Turnkey Web Application Development</h1>
      <p>
        Transforming Your Ideas Into Reality With Cutting-Edge Technology. Our
        team leverages the latest technologies to create scalable and dynamic
        web applications. Let us help you innovate, engage, and grow
      </p>

      <div className="gpt3__header-content__input">
        <button type="button">
          <a href="#contactUs">Get In Touch</a>{" "}
        </button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="tech" />
    </div>
  </div>
);

export default Header;
