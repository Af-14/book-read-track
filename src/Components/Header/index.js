import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="branding">Book Read Tracker</div>
      <div className="search-bar">
        <input type="search" placeholder="Search Book..."></input>
      </div>
      <div className="menu-buttons">
        <button>HOME</button>
        <button>MY LIST</button>
        <button>PROFILE</button>
      </div>
    </nav>
  );
};

export default Header;
