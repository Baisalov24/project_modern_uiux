import React from "react";
import "./appLifecycle.css";
import { Timeline } from "../../components";
import appLifecycleImg from "../../assets/appdev.png";

const AppLifecycle = () => (
  <div className="appLifecycle_wrapper section__margin">
    <div className="appLifecycle_topBlock">
      <div>
        <h1 className="gradient__text">
          Develop web application <br /> from scratch
        </h1>
      </div>
      <div className="appLifecycle_img">
        <img src={appLifecycleImg} alt="App development" />
      </div>
    </div>
    <div className="appLifecycle_blocks">
      <Timeline />
    </div>
  </div>
);

export default AppLifecycle;
