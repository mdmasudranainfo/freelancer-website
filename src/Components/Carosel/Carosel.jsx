import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Carosel = () => {
  return (
    <div className=" bg-[#F8F9FD]">
      <>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div className="flex items-center justify-between container mx-auto mt-3 relative">
              <div className="">
                <h1 className="lg:text-6xl text-2xl  font-bold leading-tight">
                  Find out {"  "}
                  <span className="text-primary">
                    talented <br /> freelancer
                  </span>{" "}
                  with better <br /> review faster
                </h1>
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-10 flex items-center">
                  <button className="btn btn-primary rounded-full">
                    Discover Now
                  </button>
                  <label
                    htmlFor="my-modal-5"
                    className="btn btn-primary rounded-full ml-3">
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
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                    Watch{" "}
                  </label>
                </div>
              </div>
              <div className=" relative hidden lg:block">
                <img
                  className="w-[736px]"
                  src="https://i.ibb.co/BPvvj7k/Screenshot-2023-03-01-185859.png"
                  alt=""
                />

                <img
                  className=" absolute bottom-0 left-0 w-80"
                  src="https://i.ibb.co/CWjFrR9/card-Profile.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between container mx-auto mt-3 relative">
              <div className="">
                <h1 className="lg:text-6xl text-2xl  font-bold leading-tight">
                  Find out {"  "}
                  <span className="text-primary">
                    talented <br /> freelancer
                  </span>{" "}
                  with better <br /> review faster
                </h1>
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-10 flex items-center">
                  <button className="btn btn-primary rounded-full">
                    Discover Now
                  </button>
                  <label
                    htmlFor="my-modal-5"
                    className="btn btn-primary rounded-full ml-3">
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
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                    Watch{" "}
                  </label>
                </div>
              </div>
              <div className=" relative hidden lg:block">
                <img
                  className="w-[736px]"
                  src="https://i.ibb.co/BPvvj7k/Screenshot-2023-03-01-185859.png"
                  alt=""
                />

                <img
                  className=" absolute bottom-0 left-0 w-80"
                  src="https://i.ibb.co/CWjFrR9/card-Profile.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
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
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
