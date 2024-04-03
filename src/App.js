import React from "react";
import {
  Footer,
  Blog,
  // Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import Contacts from "./containers/contacts/Contacts";
import Portfolio from "./containers/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Features />
      <Brand />
      <Blog />
      <WhatGPT3 />
      {/* <Possibility /> */}
      <Portfolio /> 

      <CTA />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
