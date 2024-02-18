import "./navBarStyles.css";
import logoImage from "../../assets/logo/inverted-logo.png";

const NavBar = () => {
  return (
    <div className="navBar-Wrapper">
      <h1 class="logo">
        <img src={logoImage} alt="frames-pro-white-bg-logo" />
      </h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </div>
  );
};

export default NavBar;
