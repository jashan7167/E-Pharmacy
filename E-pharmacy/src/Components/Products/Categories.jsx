import React, { useState } from "react";
import vendorData from "../../Data/vendor";
import "./Categories.css"; // Import the CSS file

const Categories = () => {
  const [categories, setCategories] = useState(vendorData);

  return (
    <div className="categories-container">
      <h1 className="categories-title">Product Category</h1>
      <div className="categories-list">
        {categories.map((singleCategory) => (
          <div key={singleCategory._id} className="category-item">
            <ul>
              <li className="category-entry">
                <div className="category-content">
                  <p className="category-name">{singleCategory?.shopName}</p>
                  <svg
                    className="category-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
