import Image from "next/image";
import React from "react";
import { CiCamera } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";

const Category = () => {
  return (
    // <div className="mt-[300px]">
      <div>
      <hr className="mb-10 h-5 text-gray-700 sm:py-5" />
      <div className="ml-40">
        <span id="red" className="border-l-8 border-red-500 text-red-600 p-2">
          {" "}
          Categories
        </span>
        <div className="text-3xl mt-8 text-black font-bold flex gap-5 mb-10 ">
          Browse By Category
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:px-5  md:grid-cols-3 lg:grid-cols-6 gap-8 p-3">
        {/* Phone Category */}
        <div className="flex flex-col items-center justify-center h-40 w-36 p-5 border-4 border-gray-200 hover:border-blue-600">
          <div className="relative h-28 w-28 p-2">
            <Image
              className="object-cover object-center h-full w-full"
              alt="Phones"
              src={require("./../../../public/Category-CellPhone.png01.png")}
            />
          </div>
          <p className="text-center mt-2">Phones</p>
        </div>

        {/* Computers Category */}
        <div className="flex flex-col items-center justify-center h-40 w-36 border-4 border-gray-200 hover:border-blue-600">
          <div className="relative h-28 w-28 p-2">
            <Image
              className="object-cover object-center h-full w-full"
              alt="Computers"
              src={require("./../../../public/Category-Computer.png02.png")}
            />
          </div>
          <p className="text-center mt-2">Computers</p>
        </div>

        {/* SmartWatch Category */}
        <div className="flex flex-col items-center justify-center h-40 w-36 border-4 border-gray-200 hover:border-blue-600">
          <div className="relative h-28 w-28 p-2">
            <Image
              className="object-cover object-center h-full w-full"
              alt="SmartWatch"
              src={require("./../../../public/Category-SmartWatch.pngo3.png")}
            />
          </div>
          <p className="text-center mt-2">SmartWatch</p>
        </div>

        {/* Camera Category */}
        <div className="flex flex-col items-center justify-center h-40 w-36 border-4 border-red-600 bg-red-600 hover:border-blue-600">
          <div className="relative h-28 w-28 p-2">
            <CiCamera className="object-cover object-center h-full w-full text-white" />
          </div>
          <p className="text-center text-white mt-2">Camera</p>
        </div>

        {/* HeadPhones Category */}
        <div className="flex flex-col items-center justify-center h-40 w-36 border-4 border-gray-200 hover:border-blue-600">
          <div className="relative h-28 w-28 p-2">
            <PiHeadphones className="object-cover object-center h-full w-full" />
          </div>
          <p className="text-center mt-2">HeadPhones</p>
        </div>

        {/* Gaming Category */}
        <div className="flex flex-col items-center justify-center h-40 w-36 border-4 border-gray-200 hover:border-blue-600">
          <div className="relative h-28 w-28 p-2">
            <Image
              className="object-cover object-center h-full w-full"
              alt="Gaming"
              src={require("./../../../public/o6.png")}
            />
          </div>
          <p className="text-center mt-2">Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
