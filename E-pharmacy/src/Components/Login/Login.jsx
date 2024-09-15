import React, { useState } from "react";
import "./Login.css"; // Import your CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Authentication/Auth";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showErrorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const context = useAuth();

  function handleUsernameChange(event) {
    console.log(event.target.value);
    setUser(event.target.value);
  }

  function handlePasswordChange(event) {
    console.log(event.target.value);
    setPass(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (await context.login(user, pass)) {
      navigate("/");
    } else {
      setErrorMessage(true);
    }
  }

  return (
    <div className="login-container">
      <div className="background-image">
        <p>
          Your medication, delivered <br /> Say goodbye to all your healthcare
          worries with us
        </p>
      </div>
      <div className="login-form">
        {showErrorMessage && <div>Authentication Failed</div>}
        <h2 className="form-title">Welcome Back!</h2>
        <p className="form-subtitle">Please sign in to your account</p>
        <form className="form" onSubmit={handleSubmit} method="post">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder=""
              name="username"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group checkbox-group">
            <div className="checkbox">
              <input id="remember_me" name="remember_me" type="checkbox" />
              <label htmlFor="remember_me">Remember me</label>
            </div>
            <a href="#0" className="forgot-password-link">
              Forgot your password?
            </a>
          </div>
          <button type="submit" className="submit-btn">
            Sign in
          </button>
        </form>
        <p className="signup-link">
          Don't have an account?
          <Link to="/registration">Sign-up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
