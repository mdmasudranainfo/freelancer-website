import React from "react";
import { Link } from "react-router-dom";
import { showjobs } from "../API_File/API_FILE";

const jobs = showjobs;
console.log(jobs);

const JobShow = () => {
  return (
    <div className="container mx-auto">
      <div className=" xl:flex md:block justify-between items-center">
        <h1 className="text-3xl font-semibold">Showing 34 Jobs</h1>

        <div className=" grid md:grid-cols-6 gap-4 sm:grid-cols-2 items-center">
          <p className="flex items-center gap-3">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_49_1283)">
                <path
                  d="M22.8516 6.869C21.8719 4.79244 20.3203 3.04869 18.3656 1.82525C15.6469 0.128379 12.4266 -0.410683 9.30468 0.311191C6.18281 1.02838 3.52499 2.92213 1.82812 5.64088C0.126556 8.35963 -0.412506 11.5753 0.309369 14.7018C1.03124 17.8237 2.92499 20.4815 5.63906 22.1784C7.55156 23.3737 9.74531 24.0065 11.9906 24.0065H12.1359C14.3719 23.9784 16.5469 23.3315 18.4312 22.1409C18.9797 21.794 19.1391 21.0721 18.7922 20.5237C18.4453 19.9753 17.7234 19.8159 17.175 20.1628C15.6609 21.1237 13.9078 21.644 12.1078 21.6674C10.2609 21.6909 8.45624 21.1799 6.88124 20.2003C4.69218 18.8315 3.16874 16.694 2.59218 14.1815C2.01562 11.669 2.44687 9.0815 3.81562 6.89244C6.63749 2.37838 12.6094 1.00025 17.1234 3.82213C18.6984 4.8065 19.9453 6.20807 20.7328 7.87682C21.5016 9.50338 21.8016 11.3081 21.6 13.0893C21.5297 13.7315 21.9891 14.3128 22.6359 14.3831C23.2781 14.4534 23.8594 13.994 23.9297 13.3471C24.1781 11.1299 23.8031 8.88932 22.8516 6.869Z"
                  fill="#E4CFFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_49_1283">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.00170898)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>FullTime</span>
          </p>
          <p className="flex items-center gap-3">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_49_1274)">
                <path
                  d="M22.8516 6.869C21.8719 4.79244 20.3203 3.04869 18.3656 1.82525C15.6469 0.128379 12.4266 -0.410683 9.30468 0.311191C6.18281 1.02838 3.52499 2.92213 1.82812 5.64088C0.126556 8.35963 -0.412506 11.5753 0.309369 14.7018C1.03124 17.8237 2.92499 20.4815 5.63906 22.1784C7.55156 23.3737 9.74531 24.0065 11.9906 24.0065H12.1359C14.3719 23.9784 16.5469 23.3315 18.4312 22.1409C18.9797 21.794 19.1391 21.0721 18.7922 20.5237C18.4453 19.9753 17.7234 19.8159 17.175 20.1628C15.6609 21.1237 13.9078 21.644 12.1078 21.6674C10.2609 21.6909 8.45624 21.1799 6.88124 20.2003C4.69218 18.8315 3.16874 16.694 2.59218 14.1815C2.01562 11.669 2.44687 9.0815 3.81562 6.89244C6.63749 2.37838 12.6094 1.00025 17.1234 3.82213C18.6984 4.8065 19.9453 6.20807 20.7328 7.87682C21.5016 9.50338 21.8016 11.3081 21.6 13.0893C21.5297 13.7315 21.9891 14.3128 22.6359 14.3831C23.2781 14.4534 23.8594 13.994 23.9297 13.3471C24.1781 11.1299 23.8031 8.88932 22.8516 6.869Z"
                  fill="#5F4BDB"
                />
                <path
                  d="M15.8766 7.93306L10.2235 13.5862L8.12817 11.4909C7.6688 11.0315 6.92817 11.0315 6.4688 11.4909C6.00942 11.9502 6.00942 12.6909 6.4688 13.1502L9.39379 16.0752C9.62348 16.3049 9.92348 16.4174 10.2235 16.4174C10.5235 16.4174 10.8235 16.3049 11.0532 16.0752L17.5313 9.59243C17.9907 9.13305 17.9907 8.39243 17.5313 7.93306C17.0719 7.47837 16.3313 7.47837 15.8766 7.93306Z"
                  fill="#5F4BDB"
                />
              </g>
              <defs>
                <clipPath id="clip0_49_1274">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.00170898)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Freelance</span>
          </p>

          <p class="flex items-center gap-3">
            <label>Details</label>
            <div>
              <input
                class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </p>

          <p class="flex items-center gap-3">
            <label>Salary</label>
            <div>
              <input
                class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </p>
          <p>
            <select
              id="countries"
              class=" block w-full p-2.5 rounded-full border-stone-300 border-2 focus:outline-none">
              <option selected>Newest</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </p>

          <p>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="0.5"
                width="59"
                height="59"
                rx="29.5"
                stroke="#E6E6E6"
              />
              <path
                d="M20.9998 24H31.9998C31.9998 24.5304 32.2105 25.0391 32.5855 25.4142C32.9606 25.7893 33.4693 26 33.9998 26H35.9998C36.5302 26 37.0389 25.7893 37.414 25.4142C37.789 25.0391 37.9998 24.5304 37.9998 24H38.9998C39.265 24 39.5193 23.8946 39.7069 23.7071C39.8944 23.5196 39.9998 23.2652 39.9998 23C39.9998 22.7348 39.8944 22.4804 39.7069 22.2929C39.5193 22.1054 39.265 22 38.9998 22H37.9998C37.9998 21.4696 37.789 20.9609 37.414 20.5858C37.0389 20.2107 36.5302 20 35.9998 20H33.9998C33.4693 20 32.9606 20.2107 32.5855 20.5858C32.2105 20.9609 31.9998 21.4696 31.9998 22H20.9998C20.7345 22 20.4802 22.1054 20.2926 22.2929C20.1051 22.4804 19.9998 22.7348 19.9998 23C19.9998 23.2652 20.1051 23.5196 20.2926 23.7071C20.4802 23.8946 20.7345 24 20.9998 24ZM33.9998 22H35.9998V23V24H33.9998V22ZM38.9998 29H29.9998C29.9998 28.4696 29.789 27.9609 29.414 27.5858C29.0389 27.2107 28.5302 27 27.9998 27H25.9998C25.4693 27 24.9606 27.2107 24.5855 27.5858C24.2105 27.9609 23.9998 28.4696 23.9998 29H20.9998C20.7345 29 20.4802 29.1054 20.2926 29.2929C20.1051 29.4804 19.9998 29.7348 19.9998 30C19.9998 30.2652 20.1051 30.5196 20.2926 30.7071C20.4802 30.8946 20.7345 31 20.9998 31H23.9998C23.9998 31.5304 24.2105 32.0391 24.5855 32.4142C24.9606 32.7893 25.4693 33 25.9998 33H27.9998C28.5302 33 29.0389 32.7893 29.414 32.4142C29.789 32.0391 29.9998 31.5304 29.9998 31H38.9998C39.265 31 39.5193 30.8946 39.7069 30.7071C39.8944 30.5196 39.9998 30.2652 39.9998 30C39.9998 29.7348 39.8944 29.4804 39.7069 29.2929C39.5193 29.1054 39.265 29 38.9998 29ZM25.9998 31V29H27.9998V30V31H25.9998ZM38.9998 36H35.9998C35.9998 35.4696 35.789 34.9609 35.414 34.5858C35.0389 34.2107 34.5302 34 33.9998 34H31.9998C31.4693 34 30.9606 34.2107 30.5855 34.5858C30.2105 34.9609 29.9998 35.4696 29.9998 36H20.9998C20.7345 36 20.4802 36.1054 20.2926 36.2929C20.1051 36.4804 19.9998 36.7348 19.9998 37C19.9998 37.2652 20.1051 37.5196 20.2926 37.7071C20.4802 37.8946 20.7345 38 20.9998 38H29.9998C29.9998 38.5304 30.2105 39.0391 30.5855 39.4142C30.9606 39.7893 31.4693 40 31.9998 40H33.9998C34.5302 40 35.0389 39.7893 35.414 39.4142C35.789 39.0391 35.9998 38.5304 35.9998 38H38.9998C39.265 38 39.5193 37.8946 39.7069 37.7071C39.8944 37.5196 39.9998 37.2652 39.9998 37C39.9998 36.7348 39.8944 36.4804 39.7069 36.2929C39.5193 36.1054 39.265 36 38.9998 36ZM31.9998 38V36H33.9998V37V38H31.9998Z"
                fill="#5F4BDB"
              />
            </svg>
          </p>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* jobs sections */}

      <div className=" mt-10">
        {jobs.map((job, index) => (
          <div
            data-aos="fade-up"
            className=" grid xl:grid-cols-4 md:grid-cols-2 p-7 gap-7 shadow-lg hover:shadow-2xl rounded-md mb-7 xl:justify-items-center md:justify-items-start ease-in duration-300">
            <div className=" flex items-center gap-7  ">
              <img src={job?.image} alt="" />
              <div className="">
                <h2 className=" text-2xl font-bold">{job?.name}</h2>
                <p className="text-primary">{job?.work}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img src="https://i.ibb.co/PtVtgtQ/icSalary.png" alt="" />
              <div className="">
                <h2 className=" text-xl font-semibold">$14,000 - $25,000</h2>
                <p className=" text-[#8A8A8A]">Monthly Salary</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img src="https://i.ibb.co/5rT0StQ/ic-Location.png" alt="" />
              <div className="">
                <h2 className=" text-xl font-semibold">{job?.location}</h2>
                <p className=" text-[#8A8A8A]">Location</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link
                to="/JobDetail"
                className="btn rounded-full text-primary border-none hover:btn-primary capitalize bg-[#F0EEFF]">
                Apply Now
              </Link>
              <img
                className=" cursor-pointer"
                src="https://i.ibb.co/JBQJfJ8/btnBook.png"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>

      <div data-aos="fade-up" className=" flex  text-center justify-center">
        <p className="flex items-center text-primary">
          {" "}
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
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          <span className="hidden md:block">Previous</span>
        </p>

        <p className=" text-white bg-[#ECDEFF] mx-5 p-3 rounded-full">
          <span className=" hover:bg-primary text-primary hover:text-white p-3 px-5 rounded-full">
            1
          </span>
          <span className=" bg-primary  text-white p-3 px-5 rounded-full">
            2
          </span>
          <span className=" hover:bg-primary text-primary hover:text-white p-3 px-5 rounded-full">
            3
          </span>
          <span className=" hover:bg-primary text-primary hover:text-white p-3 px-5 rounded-full">
            4
          </span>
        </p>

        <p className="flex items-center text-primary">
          <span className="hidden md:block">Next</span>

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
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default JobShow;
