import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-outer-container">
      <div className="signup-container">
        <div className="signup-logo-container">
          <Link to="/">
            <img
              src={"cozynightmoonLogo.svg"}
              alt="logo"
              className="cozynight-moon-logo"
            />
          </Link>
        </div>
        <h3 className="signup-title">Join us today.</h3>
        <form action="" className="signup-form">
          <input type="text" name="" placeholder="First Name" />
          <input type="text" name="" placeholder="Last Name" />
          <input type="text" name="" placeholder="Email" />
          <input type="text" name="" placeholder="Password" />
          <p className="login-cta-link">
            Already have an account? <Link to={"/login"}>Log in</Link>
          </p>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
