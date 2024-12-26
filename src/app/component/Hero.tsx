"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <div className=" flex justify-center items-center px-10">
      <div className="max-w-[1440px] flex gap-6 justify-center">
        {/* Left Content Section */}
        <div className=" border-r-2 border-neutral-200 p-10 hidden md:block">
          <ul className=" space-y-2">
            {[
              "Woman’sFashion",
              "Men’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item, index) => (
              <li
                key={index}
                className=" flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150"
              >
                <span>{item}</span>
                {index < 2 && <IoIosArrowForward />}
              </li>
            ))}
          </ul>
        </div>
        {/* right side */}
        <div className=" bg-black flex items-center rounded-lg p-6 px-10 pt-5 mt-10">
  <div className="flex flex-col space-y-5 justify-center sm:w-[180px] md:w-[300px] lg:w-[400px] text-white">
    <div className="flex items-center gap-2">
      <FaApple className=" sm:text-5xl md:text-5xl" />
      <span className="sm:text-2xl md:text-base font-semibold">iPhone 14 Series</span>
    </div>
  <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-white">
   Up to 10% off Voucher 
  </h1>
  <Link
    href={"products"}
    className=" underline underline-offset-4 hover:font-semibold items-center gap-2 sm:text-sm md:text-sm lg:text-2xl"
  >
   Shop Now
   <GoArrowRight className="" />
    
  </Link>
  </div>
    {/* Right Image Section */}
    <div className="ml-auto ">
     <Image

        alt="hero"
        src={require("./../../../public/hero.png")}
      />
    </div>
  

  
</div>



      </div>
    </div>
  );
}

