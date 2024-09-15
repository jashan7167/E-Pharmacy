import React from 'react'
import AllShopBanner from '../Components/Shop/AllShop/AllShopBanner'
import DisplayShop from '../Components/Shop/AllShop/DisplayShop'
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer";
function ShopPage() {
  return (
    <>
    <Navbar></Navbar>
    <AllShopBanner></AllShopBanner>
    <DisplayShop></DisplayShop>
    <Footer></Footer>
    </>
  )
}

export default ShopPage