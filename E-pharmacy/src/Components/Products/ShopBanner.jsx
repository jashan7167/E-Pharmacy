import React from "react";
import vendorData from "../../Data/vendor";
import "./ShopBanner.css"; // Import the CSS file
import { useParams } from "react-router-dom";

const ShopBanner = () => {
  const { vendorid } = useParams();
  const strippedVendorId = vendorid.replace(":", ""); // Remove ':' from vendorid
  console.log(strippedVendorId); // Check the stripped vendor id
  const newVendor = vendorData.find(
    (vendor) => vendor._id === strippedVendorId
  );
  const { shopName, cardBanner, logo, location, city, name, phone, status } =
    newVendor;

  return (
    <div className="container">
      <div className="shop-banner-wrapper">
        {/* Shop banner */}
        <img src={cardBanner} alt="banner" className="shop-banner-image" />
      </div>
      <div className="shop-details">
        <img src={logo} alt="logo" className="shop-logo" />
        <h1 className="shop-name">{shopName}</h1>
        <h4 className="shop-owner">Owner: {name}</h4>

        <div className="shop-info">
          <div className="shop-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p>
              {location}, {city}
            </p>
          </div>
          <div className="shop-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <p>{phone}</p>
          </div>
          <div className="shop-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <p>Store {status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
