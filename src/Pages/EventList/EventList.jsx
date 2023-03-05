import React from "react";
import EventHero from "../../Components/EventHero/EventHero";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";

const EventList = () => {
  return (
    <div>
      <EventHero />

      <UpcomingEvents />
    </div>
  );
};

export default EventList;
