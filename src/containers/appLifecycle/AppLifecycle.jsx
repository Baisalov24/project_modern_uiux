import React from "react";
import "./appLifecycle.css";
import { Timeline } from "../../components";

const AppLifecycle = () => (
  <div className="appLifecycle_wrapper section__margin">
    <div className="appLifecycle_title">
      <h1 className="gradient__text">Develope web application from scratch</h1>
    </div>
    <div className="appLifecycle_blocks">
      <Timeline />
    </div>
  </div>
);

export default AppLifecycle;
