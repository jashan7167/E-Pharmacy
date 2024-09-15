import React, { useState } from "react";
// import Faq from "./FAQ/FAQItem";
// import Reviews from "./Reviews/Reviews";
import productsData from "../../../Data/products";
import "./Menu.css"; // Import the CSS file
import { useParams } from "react-router-dom";
import VendorInfo from "../VendorInfo/VendorInfo";

const Menu = () => {
  const [openTab, setOpenTab] = useState(1);
  const { productid } = useParams();
  const newProduct = productsData.find((product) => product._id === productid);
  console.log(productid);
  const { name, totalReview, description, image } = newProduct;

  return (
    <div className="menu-container">
      <div className="menu-header">
        <ul className="menu-tabs" role="tablist">
          <li className="menu-tab">
            <button
              className={`menu-link ${openTab === 1 ? "active" : ""}`}
              onClick={() => setOpenTab(1)}
            >
              Description
            </button>
          </li>
          <li className="menu-tab">
            <button
              className={`menu-link ${openTab === 2 ? "active" : ""}`}
              onClick={() => setOpenTab(2)}
            >
              Reviews ({totalReview || 0})
            </button>
          </li>
          <li className="menu-tab">
            <button
              className={`menu-link ${openTab === 3 ? "active" : ""}`}
              onClick={() => setOpenTab(3)}
            >
              Vendor Info
            </button>
          </li>
          <li className="menu-tab">
            <button
              className={`menu-link ${openTab === 4 ? "active" : ""}`}
              onClick={() => setOpenTab(4)}
            >
              FAQ
            </button>
          </li>
        </ul>
      </div>
      <div className="menu-content">
        {openTab === 1 && <p className="menu-description">{description}</p>}
        {/* {openTab === 2 && <Reviews />}
        {openTab === 4 && <Faq />} */}
        {openTab === 3 && <VendorInfo />}
      </div>
    </div>
  );
};

export default Menu;
