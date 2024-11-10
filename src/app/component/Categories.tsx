"use client";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-black mt-7 mx-auto mb-20 pt-[60px] px-4 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Content Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
            <div className="flex justify-center items-center text-white mb-6">
              <span className="ml-4 text-xl md:text-2xl text-green-500">
                Categories
              </span>
            </div>

            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Enhance Your <br /> Music Experience
            </h1>
            <div className="p-6 flex gap-4 ">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 focus:outline-none text-xs font-medium">
                23 Hours
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 focus:outline-none text-xs font-medium">
                23 Hours
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 focus:outline-none text-xs font-medium">
                23 Hours
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 focus:outline-none text-xs font-medium">
                23 Hours
              </div>
            </div>

            {/* Button Section */}
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex py-3 px-5 rounded-lg items-center bg-green-500 hover:bg-gray-200 hover:font-bold focus:outline-none">
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="flex gap-2 items-center text-white hover:text-black">
                    Buy Now!
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-8 md:mt-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={require("./../../../public/Frame 694.png22.png")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;

