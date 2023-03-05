import React from "react";
import Brands from "../../Components/Brands/Brands";
import JobHero from "../../Components/JobHero/JobHero";
import JobShow from "../../Components/JobShow/JobShow";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";

const Jobs = () => {
  return (
    <div className="">
      <JobHero />
      <JobShow />
      <UpcomingEvents />
      <Brands />
    </div>
  );
};

export default Jobs;
