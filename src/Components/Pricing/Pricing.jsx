import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div data-aos="fade-up" className="container mx-auto mt-52">
      <h1 className="text-4xl text-center font-semibold">Pricing Plan</h1>
      <p className="text-center mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut <br /> labore et dolore magna aliqua
      </p>

      {/* grid  */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-10 ">
        <div
          data-aos="fade-right"
          className=" shadow-md hover:shadow-2xl ease-in duration-300 rounded-lg py-10 h-[568px] flex flex-col justify-center">
          <h3 className=" text-3xl font-semibold text-center">FREE</h3>
          <h2 className="text-6xl text-center font-bold mt-5">
            <span className="mr-1">$</span>0
          </h2>
          <p className="text-center">per month</p>
          <div className="mt-12">
            <p className="flex items-center justify-center mb-5 ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
            <p className="flex items-center justify-center mb-5 ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
            <p className="flex items-center justify-center ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
          </div>

          <div className="flex justify-center my-14 mb-10">
            <button className="btn btn-primary bg-[#F7F5FF] rounded-full w-[306px] capitalize hover:text-white text-black border-0">
              Learn More
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className=" shadow-md hover:shadow-2xl ease-in duration-300 rounded-lg py-10 h-[568px] flex flex-col justify-center">
          <h3 className=" text-3xl font-semibold text-center">PREMIUM</h3>
          <h2 className="text-6xl text-center font-bold mt-5">
            <span className="mr-1">$</span>175
          </h2>
          <p className="text-center">per month</p>
          <div className="mt-12">
            <p className="flex items-center justify-center mb-5 ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
            <p className="flex items-center justify-center mb-5 ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
            <p className="flex items-center justify-center ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
          </div>

          <div className="flex justify-center my-14 mb-10">
            <button className="btn btn-primary bg-[#F7F5FF] rounded-full w-[306px] capitalize hover:text-white text-black border-0">
              Learn More
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className=" shadow-md hover:shadow-2xl ease-in duration-300 rounded-lg py-10 h-[568px] flex flex-col justify-center">
          <h3 className=" text-3xl font-semibold text-center">PLATINUM</h3>
          <h2 className="text-6xl text-center font-bold mt-5">
            <span className="mr-1">$</span>500
          </h2>
          <p className="text-center">per month</p>
          <div className="mt-12">
            <p className="flex items-center justify-center mb-5 ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
            <p className="flex items-center justify-center mb-5 ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
            <p className="flex items-center justify-center ">
              <FaCheckCircle className="text-primary mr-2" /> Lorem ipsum dolor
              sit ame
            </p>
          </div>

          <div className="flex justify-center my-14 mb-10">
            <button className="btn btn-primary bg-[#F7F5FF] rounded-full w-[306px] capitalize hover:text-white text-black border-0">
              Learn More
            </button>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Pricing;
