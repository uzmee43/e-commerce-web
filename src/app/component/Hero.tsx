"use client";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-black mt-7 mx-auto mb-20 pt-[60px] px-4 md:px-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    {/* Left Content Section */}
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
      <div className="flex justify-center items-center text-white mb-6">
        <FaApple className="text-4xl md:text-6xl" />
        <span className="ml-4 text-xl md:text-2xl">iPhone 14 Series</span>
      </div>

      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Up to 10% <br />
        off Voucher
      </h1>

      {/* Button Section */}
      <div className="flex justify-center md:justify-start">
        <button className="inline-flex py-3 px-5 rounded-lg items-center bg-gray-700 hover:bg-gray-200 focus:outline-none">
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="flex gap-2 items-center text-white hover:text-black">
              Shop Now
              <GoArrowRight className="mt-1" />
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
        src={require("./../../../public/hero.png")}
      />
    </div>
  </div>
</section>

  );
};

export default Hero;
