import React from "react";
import "./Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        <div className="footer-links-container">
          {/* Links */}
          <div className="footer-logo">
            {/* Logo */}
            <img src="src/assets/logo.png" alt="" style={{height:"50px"}} className="logo"/>
            <p className="tagline">E-Pharmacy Demo</p>
     
          </div>
          <div className="footer-links">
            <h2 className="footer-heading">About</h2>
            <nav className="footer-nav">
              <ul>
                <li>Company</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </nav>
          </div>
          <div className="footer-links">
            <h2 className="footer-heading">Support</h2>
            <nav className="footer-nav">
              <ul>
                <li>Contact Support</li>
                <li>Help Resources</li>
                <li>Release Updates</li>
              </ul>
            </nav>
          </div>
          <div className="footer-links">
            <h2 className="footer-heading">Platform</h2>
            <nav className="footer-nav">
              <ul>
                <li>Terms &amp; Privacy</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </nav>
          </div>
          <div className="footer-links">
            <h2 className="footer-heading">Contact</h2>
            <nav className="footer-nav">
              <ul>
                <li>Send a Message</li>
                <li>Request a Quote</li>
                <li>+123-456-7890</li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="footer-text">
          © 2024 All rights reserved <span className="brand">E-Pharmacy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
