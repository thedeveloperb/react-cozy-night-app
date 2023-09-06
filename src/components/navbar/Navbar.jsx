import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content-container">
        <img
          src="cozynightLogo.svg"
          className="cozynight-logo"
          alt="cozynight-logo"
        />
        <div className="navbar-links-container">
          <Link to={"/signup"}>Sign up</Link>
          <Link to={"/login"}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
