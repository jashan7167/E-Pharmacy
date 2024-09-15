import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Hero from "../Components/Hero/Hero";
import OfferCard from "../Components/OfferCard/OfferCard";
import PictureUpload from "../Components/PictureUpload/PictureUpload";
import VendorCTA from "../Components/VendorCta/VendorCta";
import Footer from "../Components/Footer/Footer";
import NearestStore from "../Components/NearestStore/NearestStore.jsx"
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <OfferCard></OfferCard>
      <NearestStore></NearestStore>
      <PictureUpload></PictureUpload>
      <VendorCTA></VendorCTA>
      <Footer></Footer>
    </>
  );
}

export default Home;
