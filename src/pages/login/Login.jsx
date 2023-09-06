import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-outer-container">
      <div className="login-container">
        <div className="login-logo-container">
          <Link to="/">
            <img
              src={"cozynightmoonLogo.svg"}
              alt="logo"
              className="cozynight-moon-logo"
            />
          </Link>
        </div>
        <h3 className="login-title">Welcome, back</h3>
        <form action="" className="login-form">
          <input type="text" name="" placeholder="Email" />
          <input type="text" name="" placeholder="Password" />
          <p className="signup-cta-link">
            Don't have an account yet? <Link to={"/signup"}>Sign up</Link>
          </p>
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
