import React from "react";
import Brands from "../../Components/Brands/Brands";
import Carosel from "../../Components/Carosel/Carosel";
import StartJob from "../../Components/StartJob/StartJob";

const Home = () => {
  return (
    <div className="">
      <Carosel></Carosel>

      <Brands />
      <StartJob />
    </div>
  );
};

export default Home;
