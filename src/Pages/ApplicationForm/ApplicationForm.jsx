import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageDrop from "../../Components/ImageDrop/ImageDrop";

const ApplicationForm = () => {
  return (
    <div>
      {/* hero */}
      <div className="   bg-[url('https://i.ibb.co/vq3K6DB/heading.png')]">
        <div className="container mx-auto relative">
          <div className="   text-white  flex flex-col items-center py-20 pb-44">
            <h2 className="text-3xl font-semibold">Apply Job</h2>
            <p>
              <Link>Jobs</Link>/<Link> Highspeed Studios</Link>/
              <Link> UI Designer</Link>
            </p>
          </div>
          <div className=" absolute  w-14 h-14 top-10 left-0 flex items-center justify-center container mx-auto bg-white rounded-full">
            <FaArrowLeft className=" text-2xl " />
          </div>
        </div>
      </div>

      {/* job dtl */}

      <div className="container mx-auto mt-[-100px]">
        <div className="grid lg:grid-cols-3 xl:gap-9 lg:gap-5 md:grid-cols-1">
          <div className=" p-9 shadow-xl rounded-3xl bg-white">
            <div className=" flex flex-col items-center">
              <img
                className=""
                src="https://i.ibb.co/LZ35LsT/company-Logo.png"
                alt=""
              />
              <h2 className="text-2xl font-bold mt-8">Highspeed Studios</h2>
              <p className="">Creative Design Agency</p>
              <button className="btn btn-primary rounded-full my-8">
                + Follow
              </button>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-7">
              <div className=" flex gap-3">
                <img src="https://i.ibb.co/CM247v7/icon.png" alt="" />
                <div className="">
                  <h4 className="text-xl font-semibold">80 - 100</h4>
                  <p className="text-[#AEAEAE]">Employee</p>
                </div>
              </div>
              <div className=" flex gap-3">
                <img src="https://i.ibb.co/cLSgJcS/icon2.png" alt="" />
                <div className="">
                  <h4 className="text-xl font-semibold">4.5</h4>
                  <p className="text-[#AEAEAE]">Reviews</p>
                </div>
              </div>

              <div className=" flex gap-3 xl:col-span-2 lg:col-span-1">
                <img src="https://i.ibb.co/nrjHkNz/icon3.png" alt="" />
                <div className="">
                  <h4 className="text-xl font-semibold">London, England</h4>
                  <p className="text-[#AEAEAE]">Location</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>

            <div className="">
              <p className="">About Company</p>
              <p className="my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in
              </p>
            </div>
            <div className=" flex justify-evenly mt-8">
              <button className=" btn rounded-full bg-white border border-stone-300 text-black hover:text-primary hover:bg-[#EEECFF]">
                23 Vacancy
              </button>
              <button className=" btn rounded-full bg-white border border-stone-300 text-black hover:text-primary hover:bg-[#EEECFF]">
                More Detail
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 md:grid-cols-1 lg:mt-0 md:mt-10 shadow-xl rounded-3xl bg-white">
            <div className=" xl:flex lg:block items-center justify-between shadow-lg rounded-3xl p-9">
              <div className="">
                <h2 className="text-2xl font-bold ">Lead UI/UX Designer</h2>
                <p className="mt-3">Experience 2-5 years</p>
              </div>
              <div className=" flex gap-3 xl:mt-0 lg:mt-5 md:mt-3 mt-3">
                <img src="https://i.ibb.co/PtVtgtQ/icSalary.png" alt="" />
                <div className="">
                  <h4 className="text-xl font-semibold">$14,000 - $25,000</h4>
                  <p className="text-[#AEAEAE]">Monthly Salary</p>
                </div>
              </div>

              <div className=" flex gap-3 xl:mt-0 lg:mt-5 md:mt-3 mt-3">
                <img src="https://i.ibb.co/5rT0StQ/ic-Location.png" alt="" />
                <div className="">
                  <h4 className="text-xl font-semibold">London, England</h4>
                  <p className="text-[#AEAEAE]">Location</p>
                </div>
              </div>
            </div>

            {/* Fill the job applications */}

            <div className=" mt-16 p-9 shadow-2xl rounded-3xl">
              <h2 className="text-2xl font-semibold mb-10">
                Fill the job applications
              </h2>

              {/* input froms */}

              <div className=" grid xl:grid-cols-3  gap-7">
                <div className="">
                  <label className="font-semibold" htmlFor="">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered w-full mt-4 rounded-full"
                  />
                </div>
                <div className="">
                  <label className="font-semibold" htmlFor="">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    className="input input-bordered w-full mt-4 rounded-full"
                  />
                </div>
                <div className="">
                  <label className="font-semibold" htmlFor="">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered w-full mt-4 rounded-full"
                  />
                </div>
                <div className="">
                  <label className="font-semibold" htmlFor="">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    placeholder="Last Name"
                    className="input input-bordered w-full mt-4 rounded-full"
                  />
                </div>

                <div className="">
                  <label className="font-semibold" htmlFor="">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full mt-4 rounded-full"
                  />
                </div>

                <div className="">
                  <label className="font-semibold" htmlFor="">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="input input-bordered w-full mt-4 rounded-full"
                  />
                </div>
              </div>
              {/* about */}

              <div className=" mt-12">
                <h4 className="font-semibold mb-4">About You</h4>
                <p className="border p-6 rounded-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum que laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta su
                </p>
              </div>

              <div className=" mt-14">
                <h3 className="font-semibold mb-5">Attach your resume</h3>
                <ImageDrop />
              </div>

              <div className="flex justify-between mt-24">
                <button className="btn btn-primary rounded-full capitalize">
                  Submit
                </button>
                <button
                  className="btn btn-primary rounded-full capitalize"
                  disabled>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
