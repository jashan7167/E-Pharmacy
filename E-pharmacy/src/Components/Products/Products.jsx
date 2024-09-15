import React from "react";
import productsData from "../../Data/products";
import "./Products.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products-container">
      <div className="products-header">
        <h2 className="products-title">Our Products</h2>

        <div className="filters-search">
          <button
            className="filter-button"
            data-toggle="collapse"
            data-target="#filters"
          >
            Filters <i className="fa fa-filter"></i>
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Search medicine..."
            id="search-filter"
          />
        </div>
      </div>

      <div className="products-grid">
        {productsData.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-container">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="product-grid-image"
              />
            </div>

            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                {"\u20B9"}
                {product.price}
              </p>
              <p className="product-brand">{product.brand}</p>

              <div className="product-actions">
                <button className="wishlist-button" title="Add to Wishlist">
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </button>
                <button className="quickview-button" title="Quick View">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
                <button className="add-to-cart-button">
                  <Link to={`/productdetails/${product._id}`}>Add to Cart</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
