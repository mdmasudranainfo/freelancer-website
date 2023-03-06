import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";

const JobDetail = () => {
  return (
    <div className=" ">
      {/* hero */}
      <div className="   bg-[url('https://i.ibb.co/vq3K6DB/heading.png')]">
        <div className="container mx-auto relative">
          <div className="   text-white  flex flex-col items-center py-20 pb-44">
            <h2 className="text-3xl font-semibold">Job Details</h2>
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
          <div
            data-aos="fade-up"
            className=" p-9 shadow-xl rounded-3xl bg-white">
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
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:grid-cols-1 lg:mt-0 md:mt-10 p-9 shadow-xl rounded-3xl bg-white z-40">
            <div className=" md:flex sm:block justify-between">
              <div className="">
                <h2 className="text-4xl font-bold ">Lead UI/UX Designer</h2>
                <p className="mt-3">Posted by Admin on November 12th, 2020</p>
              </div>
              <div className="flex items-center gap-6 md:mt-0 mt-5">
                <button className="btn rounded-full border-none hover:btn-primary capitalize btn-primary ">
                  Apply Now
                </button>
                <img
                  className=" cursor-pointer"
                  src="https://i.ibb.co/JBQJfJ8/btnBook.png"
                  alt=""
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-3 lg:col-span-1 gap-9 my-14">
              <div className=" flex gap-3">
                <img src="https://i.ibb.co/PtVtgtQ/icSalary.png" alt="" />
                <div className="">
                  <h4 className="text-xl font-semibold">$14,000 - $25,000</h4>
                  <p className="text-[#AEAEAE]">Monthly Salary</p>
                </div>
              </div>

              <div className=" flex gap-3">
                <img src="https://i.ibb.co/X3VjWkG/ic-Salarys.png" alt="" />
                <div className="">
                  <h4 className="text-xl font-semibold">2-3 Years</h4>
                  <p className="text-[#AEAEAE]">Experience</p>
                </div>
              </div>
              <div className=" flex gap-3">
                <img src="https://i.ibb.co/5rT0StQ/ic-Location.png" alt="" />
                <div className="">
                  <h4 className="text-xl font-semibold">London, England</h4>
                  <p className="text-[#AEAEAE]">Location</p>
                </div>
              </div>
            </div>
            {/* dtl */}
            <div className="">
              <p className="font-semibold">Job Description</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum{" "}
                <br /> <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, s
              </p>
            </div>
            {/* gellary */}
            <div data-aos="fade-up" className=" mt-14">
              <h2 className="font-semibold">Galery</h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1. gap-6 mt-6 justify-items-center">
                <img src="https://i.ibb.co/n1C41Gr/4image.png" alt="" />
                <img src="https://i.ibb.co/CMS6rJD/6image.png" alt="" />
                <img src="https://i.ibb.co/tzKh989/2image.png" alt="" />
                <img src="https://i.ibb.co/P6Xpc9m/image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* related jobs jobs */}

      <div data-aos="fade-up" className=" container mx-auto mt-52">
        <div data-aos="fade-up" className=" flex items-center justify-between">
          <h1 className="text-4xl font-semibold">Related jobs</h1>
          <button className="btn bg-primary text-white rounded-full">
            View more
          </button>
        </div>

        {/* jobs cards */}
        <div className="mt-16 grid  xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 mb-60">
          <div data-aos="fade-up" className="p-5 shadow-xl rounded-md ">
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
              <button className="btn rounded-full btn-primary">
                Apply Now
              </button>
            </div>
          </div>
          <div data-aos="fade-up" className="p-5 shadow-xl rounded-md ">
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
              <button className="btn rounded-full btn-primary">
                Apply Now
              </button>
            </div>
          </div>
          <div data-aos="fade-up" className="p-5 shadow-xl rounded-md ">
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
              <button className="btn rounded-full btn-primary">
                Apply Now
              </button>
            </div>
          </div>
          <div data-aos="fade-up" className="p-5 shadow-xl rounded-md ">
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
              <button className="btn rounded-full btn-primary">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Brands />
    </div>
  );
};

export default JobDetail;
