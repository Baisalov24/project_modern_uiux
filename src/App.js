import React from "react";
import {
  Footer,
  Services,
  AboutCompany,
  AppLifecycle,
  Header,
  Contacts,
  Portfolio,
} from "./containers";
import { Tools, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <AboutCompany />
      <Tools />
      <Services />
      <AppLifecycle />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
