import React from "react";
import CountUp from "react-countup";

const backround = "https://i.ibb.co/SvRcZNf/background.png";

const CounterSection = () => {
  return (
    <div data-aos="fade-up" className="container mx-auto mt-52">
      <div
        className="p-10 bg-center items-center	 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 rounded-2xl	"
        style={{ backgroundImage: `url(${backround})` }}>
        <div className="text-white p-10 items-center">
          <h2 className="text-6xl  mb-5">
            <CountUp enableScrollSpy duration={1} end={36789} />+
          </h2>
          <p>Talented Freelancer</p>
        </div>
        <div className="text-white p-10 items-center">
          <h2 className="text-6xl  mb-5">
            {" "}
            <CountUp enableScrollSpy duration={1} end={458973} />
          </h2>
          <p>VIsitors</p>
        </div>
        <div className="text-white p-10 items-center">
          <h2 className="text-6xl  mb-5">
            {" "}
            <CountUp enableScrollSpy duration={1} end={56461} />
          </h2>
          <p>Contract Made</p>
        </div>
        <div className="text-white p-10 items-center">
          <h2 className="text-6xl  mb-5">
            {" "}
            <CountUp enableScrollSpy duration={1} end={852} /> K
          </h2>
          <p>Companies</p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
