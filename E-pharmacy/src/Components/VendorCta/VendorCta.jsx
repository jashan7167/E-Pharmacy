import React from "react";
import "./VendorCTA.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
const VendorCTA = () => {
  return (
    <>
      <section className="vendor-section">
        <div className="vendor-content">
          <div className="vendor-grid">
            <div className="vendor-text">
              <div className="vendor-heading">
                <h2 className="vendor-title">
                  Add your local pharmacy online{" "}
                  <span className="vendor-highlight">NOW</span>
                </h2>
              </div>
              <p className="vendor-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <p className="vendor-features">Features</p>
              <div className="vendor-feature-list">
                <ul>
                  <li>
                    <span className="vendor-bullet"></span>Take user orders form
                    online
                  </li>
                  <li>
                    <span className="vendor-bullet"></span>Create your shop
                    profile
                  </li>
                  <li>
                    <span className="vendor-bullet"></span>Manage your store
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="vendor-bullet"></span>Get more orders
                  </li>
                  <li>
                    <span className="vendor-bullet"></span>Storage shed
                  </li>
                  <li>
                    <span className="vendor-bullet"></span>Satoshi Nakamoto
                  </li>
                </ul>
              </div>
            </div>
            <div className="vendor-image">
              <img
                className="vendor-img"
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
                alt="admin-panel"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="vendor-cta">
        <div className="vendor-cta-content">
          <p className="vendor-cta-text">
            Open your local pharmacy turn into online store and increase your
            sells. It's totally free!
          </p>
          <button className="vendor-cta-button">
            <Link to="/createstore">Create Store Page</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default VendorCTA;
