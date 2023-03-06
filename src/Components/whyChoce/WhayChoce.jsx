import React from "react";

const WhayChoce = () => {
  return (
    <div className="mt-52 container mx-auto">
      <h2 className="text-5xl text-center">Why Choose Us</h2>
      <p className="text-center mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
      {/* grid */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:cols-1 gap-10 mt-16">
        <div data-aos="fade-up" className=" shadow-lg p-8 rounded-xl">
          <img
            className="w-20"
            src="https://i.ibb.co/GMJb27f/icon.png"
            alt=""
          />
          <h3 className="text-3xl font-semibold mt-7">Trusted</h3>
          <p className="mt-5 ">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna
            aliqua.{" "}
          </p>
        </div>
        <div data-aos="fade-up" className=" shadow-lg p-8 rounded-xl">
          <img
            className="w-20"
            src="https://i.ibb.co/G5vRP3P/icon3.png"
            alt=""
          />
          <h3 className="text-3xl font-semibold mt-7">Easy to Use</h3>
          <p className="mt-5 ">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna
            aliqua.{" "}
          </p>
        </div>

        <div data-aos="fade-up" className=" shadow-lg p-8 rounded-xl">
          <img
            className="w-20"
            src="https://i.ibb.co/bJznd91/icon2.png"
            alt=""
          />
          <h3 className="text-3xl font-semibold mt-7">Faster</h3>
          <p className="mt-5 ">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna
            aliqua.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhayChoce;
