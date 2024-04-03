import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">JT-studio</div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#company">About Company</a>
        </p>
        <p>
          <a href="#services">Services</a>
        </p>
        <p>
          <a href="#portfolio">Portfolio</a>
        </p>
        <p>
          <a href="#contactUs">Contact us</a>
        </p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#company">About Company</a>
              </p>
              <p>
                <a href="#services">Services</a>
              </p>
              <p>
                <a href="#portfolio">Portfolio</a>
              </p>
              <p>
                <a href="#contactUs">Contact us</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
