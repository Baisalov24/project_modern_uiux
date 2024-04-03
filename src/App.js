import React from "react";
import {
  Footer,
  Blog,
  AboutCompany,
  WhatGPT3,
  Header,
  Contacts,
  Portfolio,
} from "./containers";
import { Brand, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <AboutCompany />
      <Brand />
      <Blog />
      <WhatGPT3 />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
