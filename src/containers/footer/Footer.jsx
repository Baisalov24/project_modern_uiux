import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <h1>JeTrix</h1>
        <p>
          Crechterwoord J45 369 DK Jksldk, <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>
          <a href="mailto:jetrix.webdev@gmail.com" className="gmail-button">
            jetrix.webdev@gmail.com
          </a>
        </p>
        <p>
          <a href="https://wa.me/+13475630993" target="_blank">
            <p>(347) 563 0993</p>
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/jetrix_webdev" target="_blank">
            <p>@JeTrix_webdev</p>
          </a>
        </p>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>
          <a href="https://wa.me/+13475630993" target="_blank">
            <p>(347) 563 0993</p>
          </a>
        </p>
        <p>
          <a href="mailto:jetrix.webdev@gmail.com" className="gmail-button">
            jetrix.webdev@gmail.com
          </a>
        </p>

        <p>
          <a href="https://www.instagram.com/jetrix_webdev" target="_blank">
            <p>@JeTrix_webdev</p>
          </a>
        </p>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>@2023 JT-studio. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;


