import React, { useState } from "react";
import allShops from "../../../Data/vendor";
import "./DisplayShop.css";
import { Link } from "react-router-dom";

const DisplayShops = () => {
  const [shopCards, setShopCards] = useState(allShops);

  return (
    <div className="shop-container">
      <div className="cards-container">
        {shopCards.map((shopCard) => (
          <div key={shopCard._id} className="shop-card">
            <div className="logo-container">
              <img src={shopCard.cardBanner} className="card-banner" alt="" />
              <img className="shop-logo" src={shopCard.logo} alt="" />
            </div>
            <div className="card-content">
              <div className="status-container">
                <p
                  className={`status ${
                    shopCard.status === "Open" ? "open" : "closed"
                  }`}
                >
                  {shopCard.status}
                </p>
              </div>
              <h1 className="shop-name">{shopCard.shopName}</h1>
              <div className="details">
                <p className="rating">⭐ {shopCard.rating}</p>
                <p>
                  {shopCard.location} {shopCard["postal code"]}
                </p>
                <p>{shopCard.city}</p>
                <p>{shopCard.address3}</p>
                <div className="phone">
                  <svg
                    className="phone-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <p>{shopCard.phone}</p>
                </div>
              </div>
              <div className="visit-button">
                <button className="visit-btn">
                  <Link to={`/products/:${shopCard._id}`}>Visit Store</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayShops;
