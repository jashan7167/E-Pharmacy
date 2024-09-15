import React from "react";
import Categories from "../Components/Products/Categories";
import ContactVendor from "../Components/Products/ContactVendor";

import Products from "../Components/Products/Products";
import ShopBanner from "../Components/Products/ShopBanner";
import "./Productpage.css"; // Import the CSS file
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Productpage = () => {
  return (
    <>
      <Navbar></Navbar>
      <section>
        {/* Shop Banner */}
        <ShopBanner />

        <div className="shop-details-container">
          {/* Shop sidebar */}
          <div className="shop-sidebar">
            <Categories />
            <ContactVendor />
          </div>

          <div className="shop-main-content">
            {/* Products */}
            <Products />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Productpage;
