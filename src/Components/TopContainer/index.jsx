import React from "react";
import "./topcontainer.css";

const TopContainer = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="data">
          <div className="search">
            <input type="search-bar" placeholder="Search Book..."></input>
            <button type="submit-btn">Search</button>
          </div>
        </div>
        <div className="current-book">
          <h2>Continue Reading...</h2>
          <div className="data-current">test{/* Display here */}</div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
