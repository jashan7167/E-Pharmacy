import React from "react";
import Menu from "../Components/Products/Menu/Menu";
import ProductInfo from "../Components/Products/ProductInfo";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="details-page">
        <ProductInfo></ProductInfo>
        <Menu></Menu>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ProductDetailsPage;
