import React from "react";

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
        <div className="">
          <img
            className="w-full"
            src="https://i.ibb.co/X48084p/righSide.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default StartJob;
