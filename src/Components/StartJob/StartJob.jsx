import React from "react";

const StartJob = () => {
  return (
    <div className=" container mx-auto mt-10">
      <div className=" grid grid-cols-2">
        <div className="">
          <p className="text-primary">How it works</p>
          <h1 className="text-5xl">Start find a job you love with us easily</h1>

          <div
            tabIndex={0}
            className="collapse collapse-arrow  bg-base-100 rounded-box shadow-lg">
            <div className="collapse-title text-xl font-medium">
              Focus me to see content
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default StartJob;
