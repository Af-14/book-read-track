import React from "react";
import "./maincontainer.css";
import TopContainer from "../TopContainer";
import MiddleContainer from "../MiddleContainer";
import BottomContainer from "../BottomContainer";

const MainContainer = () => {
  return (
    <div className="main-container">
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </div>
  );
};

export default MainContainer;
