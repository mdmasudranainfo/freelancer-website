import React from "react";
import Slider from "react-slick";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container mx-auto">
      <div className="text-left py-[60px]">
        <h2 className="text-[40px] leading-[60px] font-semibold text-[#363848]">
          Latest News
        </h2>

        <p className="text-[16px] font-normal text-[#11142D] leading-[24px] my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="">
        <Slider {...settings}>
          <div className="">
            <div className="mb-14 flex">
              <div className="news-first-part w-[40%] mr-5 md:block hidden">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co/nrqsMY5/background.png"
                  alt=""
                  srcset=""
                />
                <button className="btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold px-14 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]">
                  PEOPLES
                </button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4">
                      James
                    </p>
                    <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFF]">
                      24min read
                    </p>
                  </div>
                  <h3 className="md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]">
                    Let’s increase your skills in pandemic with Ziro Workshops
                    2020{" "}
                  </h3>
                  <p className="text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className="news-first-part md:w-[60%] w-full blog">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co/t4Rw5vN/background.png"
                  alt=""
                  srcset=""
                />
                <button className="btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold px-14 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]">
                  PEOPLES
                </button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4">
                      James
                    </p>
                    <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFF]">
                      24min read
                    </p>
                  </div>
                  <h3 className="md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]">
                    Let’s increase your skills in pandemic with Ziro Workshops
                    2020{" "}
                  </h3>
                  <p className="text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-14 flex">
              <div className="news-first-part w-[40%] mr-5 md:block hidden">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co/nrqsMY5/background.png"
                  alt=""
                  srcset=""
                />
                <button className="btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold px-14 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]">
                  PEOPLES
                </button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4">
                      James
                    </p>
                    <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFF]">
                      24min read
                    </p>
                  </div>
                  <h3 className="md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]">
                    Let’s increase your skills in pandemic with Ziro Workshops
                    2020{" "}
                  </h3>
                  <p className="text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className="news-first-part md:w-[60%] w-full blog">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co/t4Rw5vN/background.png"
                  alt=""
                  srcset=""
                />
                <button className="btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold px-14 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]">
                  PEOPLES
                </button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4">
                      James
                    </p>
                    <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFF]">
                      24min read
                    </p>
                  </div>
                  <h3 className="md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]">
                    Let’s increase your skills in pandemic with Ziro Workshops
                    2020{" "}
                  </h3>
                  <p className="text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default News;
