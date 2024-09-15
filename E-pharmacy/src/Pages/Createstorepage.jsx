import React from "react";
import CreateStore from "../Components/CreateStorePage/Createstore";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer";

function Createstorepage() {
  return (
    <>
      <Navbar></Navbar>
      <CreateStore></CreateStore>
      <Footer></Footer>
    </>
  );
}

export default Createstorepage;
