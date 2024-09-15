import React, { useState } from "react";
import "./Registration.css";
import { registerUser } from "../../Api/apiservice";
import { useNavigate } from "react-router-dom";

const Registration = ({ setIsAccount }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: " ",
    cmPassword: "",
  });

  const handleChange = (e) => {
    //destrure the target object to get the name,value
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const signUp = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      username,
      email,
      phone,
      password,
      cmPassword,
    } = formData;

    if (password !== cmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await registerUser(formData);

      if (response.status === 200) {
        alert("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registering user", error);
      alert("Failed to register user");
    }
  };

  return (
    <div className="registration-container">
      <div className="left-panel"></div>
      <div className="right-panel">
        <form className="registration-form" onSubmit={signUp}>
          <div className="form-title">Register</div>
          <div className="form-group name">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Harsh"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Doe"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="HarshDoe"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              type="text"
              placeholder="harshdoe@example.com"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              name="phone"
              type="text"
              placeholder="+88 XXXXX XXXXX"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              name="cmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
          <div className="signup-link">
            <h6>Already have an account?</h6>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
