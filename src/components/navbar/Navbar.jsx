import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo gradient__text">JeTrix</div>
      </div>
      <div className="gpt3__navbar-sign">
        <p className="hover-text">
          <a href="#home">Home</a>
        </p>
        <p className="hover-text">
          <a href="#company">About Company</a>
        </p>
        <p className="hover-text">
          <a href="#services">Services</a>
        </p>
        <p className="hover-text">
          <a href="#portfolio">Portfolio</a>
        </p>
        <p className="hover-text">
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
              <p onClick={closeMenu}>
                <a href="#home">Home</a>
              </p>
              <p onClick={closeMenu}>
                <a href="#company">About Company</a>
              </p>
              <p onClick={closeMenu}>
                <a href="#services">Services</a>
              </p>
              <p onClick={closeMenu}>
                <a href="#portfolio">Portfolio</a>
              </p>
              <p onClick={closeMenu}>
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
