import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-text">Your medication, delivered</span>
          </h1>
          <div className="hero-subtitle">
            Say goodbye to all your healthcare worries with us
          </div>

          <div className="hero-search-container">
            {/* Search functionality for a medicine */}
            <input
              type="text"
              name="search"
              placeholder="Search your medicine from here"
              className="hero-search-input"
            />
            <span className="hero-search-button-container">
              <button type="button" className="hero-search-button">
                Search
              </button>
            </span>
          </div>

          <div className="hero-footer">Take care of your healthcare now!</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
