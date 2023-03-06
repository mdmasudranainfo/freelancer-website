import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div data-aos="fade-up" className="bg-[#1F2131] text-white mt-24 py-11">
      <div className="container mx-auto p-2">
        {/* subscribe */}
        <div className=" lg:flex sm:inline-block justify-between">
          <h2 className="xxl:text-4xl xl:text-2xl mb-10">
            Don’t miss our weekly updates <br /> about freelancer career
          </h2>
          <div className="">
            <div className=" flex items-center justify-between w-full  border-2 border-slate-700 rounded-full">
              <input
                type="text"
                placeholder="Enter your email address..."
                className="input   w-full bg-transparent   "
              />
              <button className=" top-2 right-4 bg-[#FE8D4D] rounded-full btn btn-md m-1">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* footer start */}
        {/* footer end */}
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-24 ">
          <div className=" md:col-span-2 sm:col-span-1">
            <div className="">
              <img src="https://i.ibb.co/WnGCPrg/logo.png" alt="" />
            </div>
            <p className=" mt-9">
              Ziro is a Freelance Landing Website lorem ipsum dolor sit <br />{" "}
              amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor
              incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad
              minim veniam, quis nostrud
            </p>
            <div className=" flex gap-4 mt-5">
              <FaFacebookF className=" w-9 h-9 p-2 hover:bg-[#3CB5DB] rounded-full border " />
              <FaTwitter className=" w-9 h-9 p-2 hover:bg-[#3CB5DB] rounded-full border " />
              <FaYoutube className=" w-9 h-9 p-2 hover:bg-[#3CB5DB] rounded-full border " />
              <FaLinkedinIn className=" w-9 h-9 p-2 hover:bg-[#3CB5DB] rounded-full border " />
              <FaInstagram className=" w-9 h-9 p-2 hover:bg-[#3CB5DB] rounded-full border " />
            </div>
          </div>

          <div className=" ">
            <h3 className="mt-6 font-bold">Ziro</h3>
            <p className="mt-6"> Why Ziro</p>
            <p className="mt-6"> Enterprise</p>
            <p className="mt-6"> Customer Story</p>
            <p className="mt-6"> Security</p>
            <p className="mt-6">Pricing</p>
          </div>
          <div className=" ">
            <h3 className="mt-6 font-bold">Resources</h3>
            <p className="mt-6"> Download</p>
            <p className="mt-6">Help Center</p>
            <p className="mt-6"> Events</p>
            <p className="mt-6"> Guides</p>
            <p className="mt-6">Partner</p>
            <p className="mt-6">Directories</p>
          </div>
          <div className=" ">
            <h3 className="mt-6 font-bold">Company</h3>
            <p className="mt-6"> About us</p>
            <p className="mt-6">Contact usr</p>
            <p className="mt-6"> Products</p>
            <p className="mt-6"> Login</p>
            <p className="mt-6">Sign Up</p>
            <p className="mt-6">FAQ</p>
          </div>
          <div className=" ">
            <h3 className="mt-6 font-bold">Get in Touch with Us</h3>
            <p className="mt-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="text-sm">
                832 Thompson Drive, San Fransisco <br /> CA 94107, United States
              </span>
            </p>
            <p className="mt-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <span className="text-sm">+123 345123 556</span>
            </p>
            <p className="mt-6 flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5ZM4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.23171 7.35984C5.58528 6.93556 6.21584 6.87824 6.64012 7.2318L11.3597 11.1648C11.7306 11.4738 12.2692 11.4738 12.6401 11.1648L17.3597 7.2318C17.784 6.87824 18.4146 6.93556 18.7681 7.35984C19.1217 7.78412 19.0644 8.41468 18.6401 8.76825L13.9204 12.7012C12.8079 13.6284 11.1919 13.6284 10.0793 12.7012L5.35975 8.76825C4.93547 8.41468 4.87815 7.78412 5.23171 7.35984Z"
                  fill="white"
                />
              </svg>
              <span className="text-sm">support@ziro.id</span>
            </p>
          </div>
        </div>

        {/* copyright  */}
      </div>
      <div className="divider"></div>
      <div className="md:flex block  justify-between  mt-6 container mx-auto ">
        <p className="mt-3">
          Ziro Freelancer Landing Website - © 2020 All Rights Reserved
        </p>
        <p className="mt-3">Made with ♥ by Peterdraw</p>
      </div>
    </div>
  );
};

export default Footer;
