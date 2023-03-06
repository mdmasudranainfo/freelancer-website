import React from "react";
import { FaBeer, FaStar } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const FeaturedProfile = () => {
  return (
    <div
      data-aos="fade-up"
      className="mt-52 mx-auto container overflow-hidden z-50">
      <div className="flex justify-between items-center">
        <h1 className="md:text-3xl sm:xl font-semibold">
          Featured profile this week
        </h1>
        <p className="text-primary">View more</p>
      </div>
      {/* carosel */}

      <>
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1860: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <div className="  shadow-lg my-4 rounded-lg p-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/qRcjLFz/placeholder.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* name position */}
                <div className=" ml-6">
                  <h3 className="text-xl font-semibold">David Hutapea</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>

              <div className=" flex justify-between mt-6 items-center">
                <div className="flex items-center m-0">
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2  w-4" />
                </div>

                <button className="bg-[#FF8412] btn border-0 rounded-full">
                  $84/hr
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  shadow-lg my-4 rounded-lg p-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/qRcjLFz/placeholder.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* name position */}
                <div className=" ml-6">
                  <h3 className="text-xl font-semibold">David Hutapea</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>

              <div className=" flex justify-between mt-6 items-center">
                <div className="flex items-center m-0">
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2  w-4" />
                </div>

                <button className="bg-[#FF8412] btn border-0 rounded-full">
                  $84/hr
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  shadow-lg my-4 rounded-lg p-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/qRcjLFz/placeholder.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* name position */}
                <div className=" ml-6">
                  <h3 className="text-xl font-semibold">David Hutapea</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>

              <div className=" flex justify-between mt-6 items-center">
                <div className="flex items-center m-0">
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2  w-4" />
                </div>

                <button className="bg-[#FF8412] btn border-0 rounded-full">
                  $84/hr
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  shadow-lg my-4 rounded-lg p-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/qRcjLFz/placeholder.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* name position */}
                <div className=" ml-6">
                  <h3 className="text-xl font-semibold">David Hutapea</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>

              <div className=" flex justify-between mt-6 items-center">
                <div className="flex items-center m-0">
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2  w-4" />
                </div>

                <button className="bg-[#FF8412] btn border-0 rounded-full">
                  $84/hr
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  shadow-lg my-4 rounded-lg p-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/qRcjLFz/placeholder.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* name position */}
                <div className=" ml-6">
                  <h3 className="text-xl font-semibold">David Hutapea</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>

              <div className=" flex justify-between mt-6 items-center">
                <div className="flex items-center m-0">
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2  w-4" />
                </div>

                <button className="bg-[#FF8412] btn border-0 rounded-full">
                  $84/hr
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  shadow-lg my-4 rounded-lg p-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/qRcjLFz/placeholder.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* name position */}
                <div className=" ml-6">
                  <h3 className="text-xl font-semibold">David Hutapea</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>

              <div className=" flex justify-between mt-6 items-center">
                <div className="flex items-center m-0">
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2  w-4" />
                </div>

                <button className="bg-[#FF8412] btn border-0 rounded-full">
                  $84/hr
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  shadow-lg my-4 rounded-lg p-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/qRcjLFz/placeholder.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* name position */}
                <div className=" ml-6">
                  <h3 className="text-xl font-semibold">David Hutapea</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>

              <div className=" flex justify-between mt-6 items-center">
                <div className="flex items-center m-0">
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2 text-[#FF8412] w-4" />
                  <FaStar className=" ml-2  w-4" />
                </div>

                <button className="bg-[#FF8412] btn border-0 rounded-full">
                  $84/hr
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>

      {/* end */}
      <div className="grid grid-cols-3 mt-20"></div>
    </div>
  );
};

export default FeaturedProfile;
