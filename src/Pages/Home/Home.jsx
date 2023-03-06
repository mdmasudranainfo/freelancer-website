import React from "react";
import Brands from "../../Components/Brands/Brands";
import Carosel from "../../Components/Carosel/Carosel";
import CounterSection from "../../Components/CounterSection/CounterSection";
import CustomerSay from "../../Components/CustomerSay/CustomerSay";
import FeaturedJobs from "../../Components/FeaturedJobs/FeaturedJobs";
import FeaturedProfile from "../../Components/FeaturedProfile/FeaturedProfile";
import LatestNews from "../../Components/News/News";
import News from "../../Components/News/News";
import Pricing from "../../Components/Pricing/Pricing";
import StartJob from "../../Components/StartJob/StartJob";
import WhayChoce from "../../Components/whyChoce/WhayChoce";

const Home = () => {
  return (
    <div className="">
      <Carosel></Carosel>
      <Brands />
      <StartJob />
      <WhayChoce />
      <FeaturedProfile />

      <FeaturedJobs />
      <CustomerSay />
      <CounterSection />
      <Pricing />
      {/* <News /> */}
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
