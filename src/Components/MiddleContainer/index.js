import React from "react";
import "./middlecontainer.css";

const MiddleContainer = () => {
  return (
    <div className="middle">
      <div className="container">
        <div className="data">
          <div className="top-book">
            <h2>TOP 10 BOOKS</h2>
            <div className="data-current">test{/* Display here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
