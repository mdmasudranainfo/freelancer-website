import React from "react";

const FeaturedJobs = () => {
  return (
    <div className="container mx-auto mt-52">
      <h1 className=" text-4xl font-semibold text-center">Featured Jobs</h1>
      <p className="mt-5 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>

      {/* card grid */}
      <div className="mt-16 grid  xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        <div className="p-5 shadow-xl rounded-md ">
          <div className=" flex justify-end">
            <img
              className="cursor-pointer"
              src="https://i.ibb.co/Kxm0Y6h/ic-more-Vertical.png"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <img src="https://i.ibb.co/6tkshZd/company-Logo4.png" alt="" />
          </div>

          <h3 className="text-center my-4 text-lg font-semibold">
            Database Programmer
          </h3>
          <p className="text-primary text-center">Maximoz Team</p>

          <p className="flex items-center justify-evenly">
            <img src="https://i.ibb.co/Lx9RmcT/icSalary.png" alt="" />
            <span>$14,000 - $25,000</span>
            <span className=" text-[#A9A9A9] my-4">/monthly</span>
          </p>

          <p className="flex items-center justify-evenly">
            <img src="https://i.ibb.co/3Ndx4qt/place-1.png" alt="" />
            <span>London, England</span>
            <span className=" text-[#A9A9A9] my-4">View Maps</span>
          </p>

          <div className="flex justify-evenly items-center">
            <img src="https://i.ibb.co/M950Mf7/btnBook.png" alt="" />
            <button className="btn rounded-full btn-primary">Apply Now</button>
          </div>
        </div>
        <div className="p-5 shadow-xl rounded-md ">
          <div className=" flex justify-end">
            <img
              className="cursor-pointer"
              src="https://i.ibb.co/Kxm0Y6h/ic-more-Vertical.png"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <img src="https://i.ibb.co/QrGcTX6/company-Logo3.png" alt="" />
          </div>

          <h3 className="text-center my-4 text-lg font-semibold">
            UI/UX Designer
          </h3>
          <p className="text-primary text-center">Colo Colo Studios</p>

          <p className="flex items-center justify-evenly">
            <img src="https://i.ibb.co/Lx9RmcT/icSalary.png" alt="" />
            <span>$14,000 - $25,000</span>
            <span className=" text-[#A9A9A9] my-4">/monthly</span>
          </p>

          <p className="flex items-center justify-evenly">
            <img src="https://i.ibb.co/3Ndx4qt/place-1.png" alt="" />
            <span>London, England</span>
            <span className=" text-[#A9A9A9] my-4">View Maps</span>
          </p>

          <div className="flex justify-evenly items-center">
            <img src="https://i.ibb.co/M950Mf7/btnBook.png" alt="" />
            <button className="btn rounded-full btn-primary">Apply Now</button>
          </div>
        </div>
        <div className="p-5 shadow-xl rounded-md ">
          <div className=" flex justify-end">
            <img
              className="cursor-pointer"
              src="https://i.ibb.co/Kxm0Y6h/ic-more-Vertical.png"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <img src="https://i.ibb.co/XDj00km/company-Logo.png" alt="" />
          </div>

          <h3 className="text-center my-4 text-lg font-semibold">
            Database Programmer
          </h3>
          <p className="text-primary text-center">Snailination Studios</p>

          <p className="flex items-center justify-evenly">
            <img src="https://i.ibb.co/Lx9RmcT/icSalary.png" alt="" />
            <span>$14,000 - $25,000</span>
            <span className=" text-[#A9A9A9] my-4">/monthly</span>
          </p>

          <p className="flex items-center justify-evenly">
            <img src="https://i.ibb.co/3Ndx4qt/place-1.png" alt="" />
            <span>London, England</span>
            <span className=" text-[#A9A9A9] my-4">View Maps</span>
          </p>

          <div className="flex justify-evenly items-center">
            <img src="https://i.ibb.co/M950Mf7/btnBook.png" alt="" />
            <button className="btn rounded-full btn-primary">Apply Now</button>
          </div>
        </div>
        <div className="p-5 shadow-xl rounded-md ">
          <div className=" flex justify-end">
            <img
              className="cursor-pointer"
              src="https://i.ibb.co/Kxm0Y6h/ic-more-Vertical.png"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <img src="https://i.ibb.co/HzFrBn2/placeholder.png" alt="" />
          </div>

          <h3 className="text-center my-4 text-lg font-semibold">
            Content Writer
          </h3>
          <p className="text-primary text-center">Faster WOY Crew</p>

          <p className="flex items-center justify-evenly">
            <img src="https://i.ibb.co/Lx9RmcT/icSalary.png" alt="" />
            <span>$14,000 - $25,000</span>
            <span className=" text-[#A9A9A9] my-4">/monthly</span>
          </p>

          <p className="flex items-center justify-evenly">
            <img src="https://i.ibb.co/3Ndx4qt/place-1.png" alt="" />
            <span>London, England</span>
            <span className=" text-[#A9A9A9] my-4">View Maps</span>
          </p>

          <div className="flex justify-evenly items-center">
            <img src="https://i.ibb.co/M950Mf7/btnBook.png" alt="" />
            <button className="btn rounded-full btn-primary">Apply Now</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="btn btn-primary rounded-full px-7 mt-14">
          View More
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
