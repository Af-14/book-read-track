import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
// import MainContainer from "../MainContainer";
// import MyList from "../MyList";
// import Profile from "../Profile";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="branding">Book Read Tracker</div>
      {/* <div className="search">
        <input type="search-bar" placeholder="Search Book..."></input>
        <button type="submit-btn">Search</button>
      </div> */}
      {/* <div className="menu-li"> */}
      {/* <BrowserRouter> */}
      {/* <ul> */}
      {/* <li>
              <Link to="/Home">Home</Link>
            </li> */}
      {/* <li>
              <Link to="/MyList">My List</Link>
            </li> */}
      {/* <li>
              <Link to="/Profile">Profile</Link>
            </li> */}
      {/* </ul> */}

      {/* <Routes>
            <Route exact path="" element={<MainContainer />} />
            <Route path="MyList" element={<MyList />} />
            <Route path="Profile" element={<Profile />} />
          </Routes> */}
      {/* </BrowserRouter> */}
      {/* </div> */}
    </nav>
  );
};

export default Header;
