import React from "react";
import "./mylist.css";

const MyList = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="data"></div>
        <h2>My List</h2>
        <div className="current-book">
          <h4>Current Reading</h4>
          <div className="data-current">test{/* Display here */}</div>
        </div>
        <div className="current-book">
          <h4>Wishlist</h4>
          <div className="data-current">test{/* Display here */}</div>
        </div>
        <div className="current-book">
          <h4>Finished</h4>
          <div className="data-current">test{/* Display here */}</div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
