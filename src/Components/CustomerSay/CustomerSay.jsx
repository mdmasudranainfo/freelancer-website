// import React from "react";
import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";

const CustomerSay = () => {
  const settings = {
    // dots: true,
    arrows: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft className="prevButtuon" />,
  };
  return (
    <div className=" mt-56 container mx-auto">
      <h1 className="text-5xl text-center font-semibold">
        What our Customer Says
      </h1>
      <p className="text-center my-7 mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>

      {/*  */}

      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <div className="grid grid-cols-4 items-center">
              <div className="hidden md:block relative">
                <img src="https://i.ibb.co/QkBGf5n/author-Profile.png" alt="" />
                <img
                  className=" absolute top-0 left-0"
                  src="https://i.ibb.co/BnnftPC/image.png"
                  alt=""
                />
              </div>
              <div className=" col-span-3 p-3">
                <div className="md:flex sm:block justify-between items-center">
                  <div className=" ">
                    <h2 className="text-[20px] font-semibold">William Smith</h2>
                    <p className="my-2">CEO of True Love Studios</p>
                  </div>
                  <div className=" flex items-center">
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <span className=" ml-2 text-3xl font-semibold ">4.8</span>
                  </div>
                </div>
                <p
                  className="mt-4
                
                
                ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
                <div className=" mt-10 flex justify-end">
                  <div className="avatar-group -space-x-4">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/QkBGf5n/author-Profile.pnghttps://i.ibb.co/TPnBXVX/placeholder3.png" />
                      </div>
                    </div>
                    <div className="avatar ">
                      <div className="w-12">
                        <img src="https://i.ibb.co/NThKfSV/placeholder2.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/B327nY0/placeholder1.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/K0NzpSY/placeholder.png" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral-focus text-neutral-content bg-primary">
                        <span className="">21k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-4 items-center">
              <div className="hidden md:block relative">
                <img src="https://i.ibb.co/QkBGf5n/author-Profile.png" alt="" />
                <img
                  className=" absolute top-0 left-0"
                  src="https://i.ibb.co/BnnftPC/image.png"
                  alt=""
                />
              </div>
              <div className=" col-span-3 p-3">
                <div className="md:flex sm:block justify-between items-center">
                  <div className=" ">
                    <h2 className="text-[20px] font-semibold">William Smith</h2>
                    <p className="my-2">CEO of True Love Studios</p>
                  </div>
                  <div className=" flex items-center">
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <span className=" ml-2 text-3xl font-semibold ">4.8</span>
                  </div>
                </div>
                <p
                  className="mt-4
                
                
                ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
                <div className=" mt-10 flex justify-end">
                  <div className="avatar-group -space-x-4">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/QkBGf5n/author-Profile.pnghttps://i.ibb.co/TPnBXVX/placeholder3.png" />
                      </div>
                    </div>
                    <div className="avatar ">
                      <div className="w-12">
                        <img src="https://i.ibb.co/NThKfSV/placeholder2.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/B327nY0/placeholder1.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/K0NzpSY/placeholder.png" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral-focus text-neutral-content bg-primary">
                        <span className="">21k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-4 items-center">
              <div className="hidden md:block relative">
                <img src="https://i.ibb.co/QkBGf5n/author-Profile.png" alt="" />
                <img
                  className=" absolute top-0 left-0"
                  src="https://i.ibb.co/BnnftPC/image.png"
                  alt=""
                />
              </div>
              <div className=" col-span-3 p-3">
                <div className="md:flex sm:block justify-between items-center">
                  <div className=" ">
                    <h2 className="text-[20px] font-semibold">William Smith</h2>
                    <p className="my-2">CEO of True Love Studios</p>
                  </div>
                  <div className=" flex items-center">
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <span className=" ml-2 text-3xl font-semibold ">4.8</span>
                  </div>
                </div>
                <p
                  className="mt-4
                
                
                ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
                <div className=" mt-10 flex justify-end">
                  <div className="avatar-group -space-x-4">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/QkBGf5n/author-Profile.pnghttps://i.ibb.co/TPnBXVX/placeholder3.png" />
                      </div>
                    </div>
                    <div className="avatar ">
                      <div className="w-12">
                        <img src="https://i.ibb.co/NThKfSV/placeholder2.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/B327nY0/placeholder1.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/K0NzpSY/placeholder.png" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral-focus text-neutral-content bg-primary">
                        <span className="">21k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-4 items-center">
              <div className="hidden md:block relative">
                <img src="https://i.ibb.co/QkBGf5n/author-Profile.png" alt="" />
                <img
                  className=" absolute top-0 left-0"
                  src="https://i.ibb.co/BnnftPC/image.png"
                  alt=""
                />
              </div>
              <div className=" col-span-3 p-3">
                <div className="md:flex sm:block justify-between items-center">
                  <div className=" ">
                    <h2 className="text-[20px] font-semibold">William Smith</h2>
                    <p className="my-2">CEO of True Love Studios</p>
                  </div>
                  <div className=" flex items-center">
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <FaStar className=" ml-2 text-[#FE8D4D]" />
                    <span className=" ml-2 text-3xl font-semibold ">4.8</span>
                  </div>
                </div>
                <p
                  className="mt-4
                
                
                ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
                <div className=" mt-10 flex justify-end">
                  <div className="avatar-group -space-x-4">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/QkBGf5n/author-Profile.pnghttps://i.ibb.co/TPnBXVX/placeholder3.png" />
                      </div>
                    </div>
                    <div className="avatar ">
                      <div className="w-12">
                        <img src="https://i.ibb.co/NThKfSV/placeholder2.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/B327nY0/placeholder1.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/K0NzpSY/placeholder.png" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral-focus text-neutral-content bg-primary">
                        <span className="">21k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomerSay;
