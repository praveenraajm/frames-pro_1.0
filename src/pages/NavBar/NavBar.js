import "./navBarStyles.css";
import logoImage from "../../assets/logo/inverted-logo.png";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="navBar-Wrapper">
      <h1 className="logo">
        <a href="/">
          <img src={logoImage} alt="frames-pro-white-bg-logo" />
        </a>
      </h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a href="/" className={isActive("/") ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={isActive("/about") ? "active" : ""}>
              About
            </a>
          </li>
          <li>
            <a href="/gallery" className={isActive("/gallery") ? "active" : ""}>
              Gallery
            </a>
          </li>
          <li>
            <a href="/contact" className={isActive("/contact") ? "active" : ""}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </div>
  );
};

export default NavBar;
