import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import About from "./About/About";
import InfoCards from "./InfoCards/InfoCards";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <About></About>
    </div>
  );
};

export default Home;
