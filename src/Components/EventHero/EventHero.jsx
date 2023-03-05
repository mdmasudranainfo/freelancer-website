import React from "react";

const EventHero = () => {
  return (
    <div className=" container mx-auto">
      <div className="flex  bg-[#372F67] rounded-3xl">
        <div className=" w-6/12">
          <img src="https://i.ibb.co/BngP6r2/image.png" alt="" />
        </div>
        <div className=" w-6/12 text-white flex flex-col justify-center p-10">
          <p className="text-[#FE8D4D]">FEATURED EVENTS</p>
          <h2 className="text-4xl font-semibold mt-4">
            Ziro Worldwide Freelancers Meetup Indonesia 2020
          </h2>
          <p className="mt-3">
            <span>Saturday, November 28th, 2020 </span>{" "}
            <span className="ml-3">Jakarta, Indonesia</span>
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* prograess */}
          <progress
            className="progress progress-primary mt-10"
            value="70"
            max="100"></progress>
          <p className="flex justify-between mt-3">
            <span>Tickets</span>
            <span>34 left</span>
          </p>

          <div className=" flex items-center mt-10">
            <button className="btn btn-primary rounded-full">Book Now</button>
            <button className="btn btn-primary bg-[#ffffff42] rounded-full border-none ml-4">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.625 2.05493C14.7823 2.05493 12.9558 3.91507 12 5.58635C11.0442 3.91507 9.21773 2.05493 6.375 2.05493C2.76736 2.05493 0 4.81798 0 8.48262C0 12.4563 3.46706 15.1623 8.64436 19.2595C11.1795 21.2639 11.3423 21.4163 12 21.945C12.5367 21.5135 12.8338 21.2535 15.3556 19.2595C20.5329 15.1623 24 12.4563 24 8.48262C24 4.81803 21.2326 2.05493 17.625 2.05493Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="ml-1">Bookmark</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
