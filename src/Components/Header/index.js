import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="branding">Book Read Tracker</div>
      <div className="search-bar">
        <input type="search" placeholder="Search Book..."></input>
        <button type="submit-btn">Search</button>
      </div>
      <div className="menu-buttons">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/MyList">My List</Link>
        </button>
        <button>
          <Link to="/Profile">Profile</Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
