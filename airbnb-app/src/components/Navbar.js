import "./Navbar.css";
import { ReactComponent as Airbnb } from "../svg-icons/air.svg";
import { ReactComponent as Internet } from "../svg-icons/internet.svg";
import { ReactComponent as Menu } from "../svg-icons/menu.svg";
import { ReactComponent as Account } from "../svg-icons/account.svg";
import { ReactComponent as Search } from "../svg-icons/search.svg";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <a href="/">
        <Airbnb id="air-logo" />
      </a>
      <div className="search-bar">
        <p id="any-where">Anywhere</p>
        <span>|</span>
        <p id="any-week">Anyweek</p>
        <span>|</span>
        <p>Add guests</p>
        <Search className="search-btn" />
      </div>
      <div className="profile-host">
        <p>Become a host</p>
        <div className="web">
          <Internet />
        </div>
        <div className="profile-menu">
          <Menu className="menu" />
          <Account className="account" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
