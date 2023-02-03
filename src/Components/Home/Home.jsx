import React from "react";
import Banner from "./Banner/Banner";
import Expoil from "./Expoil/Expoil";
import AgroProduct from "./products/AgroProduct";
import Vision from "./Vision/Vision";
import Welcome from "./Welcome/Welcome";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Welcome />
      <AgroProduct />
      <Vision />
      <Expoil />
    </React.Fragment>
  );
};

export default Home;
