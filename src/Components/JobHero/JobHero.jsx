import React from "react";

const JobHero = () => {
  return (
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 items-center">
        <div className="">
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-semibold">
            Find your dream jobs <br /> through{" "}
            <span className="text-primary ">Ziro</span> easily
          </h1>
          <div className=" mt-14 relative">
            <input
              type="text"
              placeholder="Search here..."
              className="input focus:bottom-0 focus:outline-none shadow-sm w-full rounded-full"
            />
            <button className="btn btn-primary rounded-full px-14 absolute right-0 top-0">
              Search
            </button>
          </div>
          <div className="flex flex-wrap lg:gap-7 gap-2 mt-7">
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              Web Dev
            </button>
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              Mobile Dev
            </button>
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              Design
            </button>
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              Writing
            </button>
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              Admin Support
            </button>
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              Customer Service
            </button>
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              Marketing
            </button>
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              Accounting
            </button>
            <button className="capitalize btn hover:btn-primary bg-white text-black border-stone-300 rounded-full">
              View all categories
            </button>
          </div>
        </div>

        <div className="">
          <img
            className="w-full"
            src="https://i.ibb.co/27HLp4Y/Screenshot-2023-03-04-102526.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default JobHero;
