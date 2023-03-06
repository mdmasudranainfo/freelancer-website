import React from "react";
import { FaTimes } from "react-icons/fa";

const StartJob = () => {
  return (
    <div className=" container mx-auto mt-10">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center items-center">
        <div className="">
          <p className="text-primary ">How it works</p>
          <h1 className="text-5xl my-10">
            Start find a job you love <br /> with us easily
          </h1>

          <div
            tabIndex={0}
            className="collapse mb-4 collapse-arrow  bg-base-100 rounded-box shadow-lg  p-6">
            <div className="collapse-title text-xl font-medium">
              <span className=" rounded-lg bg-[#F6EBFF] text-[#8E22E2] px-5 py-4">
                1
              </span>{" "}
              Complete Profile
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow mb-4 bg-base-100 rounded-box shadow-lg p-6">
            <div className="collapse-title text-xl font-medium">
              <span className="px-5 py-4 rounded-lg bg-[#E7E9FF] text-[#2B3DC7]">
                2
              </span>{" "}
              Search Vacancies
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow   bg-base-100 rounded-box shadow-lg p-6">
            <div className="collapse-title text-xl font-medium">
              <span className="px-5 py-4 rounded-lg bg-[#E9FFEF] text-[#3DCD65]">
                3
              </span>{" "}
              Apply Jobs
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
        <div className=" relative">
          <img
            className="w-full"
            src="https://i.ibb.co/wypbXY2/righSide.png"
            alt=""
          />
          <label
            htmlFor="my-modal-1"
            className="absolute h-full w-full flex justify-center items-center top-0 left-0">
            <img
              className=" cursor-pointer"
              src="https://i.ibb.co/HVY5p5D/icon-Playvideo.png"
              alt=""
            />
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <iframe
            className="w-full h-96
            .
            
            
            "
            width=""
            height=""
            src="https://www.youtube.com/embed/O8kmknVFyKQ?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <div className="modal-action">
            <label
              htmlFor="my-modal-1"
              className="btn btn-primary rounded-full">
              <FaTimes />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJob;
