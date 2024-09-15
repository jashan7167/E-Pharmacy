import React from "react";
import { Link } from "react-router-dom";
import QuantityButton from "../Common/QuantityButton";
// import ShowRating from "../Common/ShowRating";
import "./ProductInfo.css"; // Import the CSS file
import productsData from "../../Data/products";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { productid } = useParams();
  // find method iterates over the products and check for id
  const newProduct = productsData.find((product) => product._id === productid);
  console.log(productid);
  const { name, brand, description, image, rating } = newProduct;

  return (
    <>
      <div className="product-info-container">
        <div className="product-image-container">
          <img alt="ecommerce" className="product-image" src={image} />
        </div>
        <div className="product-details">
          <h1 className="product-title">{name}</h1>
          <h2 className="product-brand">Brand: {brand}</h2>
          <div className="product-rating">Rating:{rating}</div>
          <p className="product-description">{description}</p>
          <div className="product-price-container">
            <span className="product-price">{"\u20B9"}58.00</span>
          </div>
          <div className="product-buttons">
            <div className="quantity">
              <QuantityButton />
            </div>
            <div className="addtocart-container">
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
