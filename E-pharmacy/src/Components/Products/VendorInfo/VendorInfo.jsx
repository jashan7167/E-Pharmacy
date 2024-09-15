import React from "react";
import vendorData from "../../../Data/vendor";
import "./VendorInfo.css"; // Import the CSS file

const VendorInfo = () => {
  const vendor = vendorData[0];

  // Function to generate star rating
  const renderStars = (rating) => {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return filledStars + emptyStars;
  };

  return (
    <div className="vendor-info">
      <h3 className="vendor-title">Store Name: {vendor.shopName}</h3>
      <h3 className="vendor-title">Owner Name: {vendor.name}</h3>
      <h3 className="vendor-title">Owner Phone: {vendor.phone}</h3>
      <h3 className="vendor-title">Owner Email: {vendor.email}</h3>
      <h3 className="vendor-title">
        Address: {vendor.location} {vendor.location && ","} {vendor.city}
      </h3>
      <h3 className="vendor-title">
        {vendor.rating} rating from {vendor.totalReview} reviews: &nbsp;
        <span className="vendor-rating">{renderStars(vendor.rating)}</span>
      </h3>
    </div>
  );
};

export default VendorInfo;
