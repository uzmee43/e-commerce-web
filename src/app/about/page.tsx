import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className='h-full w-full sm:px-20 '>
      <div className='py-10 px-4 sm:px-12'>
        <Link href={"/"}>
          <samp className='text-gray-400'>Home /</samp> About
        </Link>
      </div>

      <div className='flex flex-col sm:flex-row justify-center gap-4 py-10 sm:px-10'>
        {/* Left Side: Our Story */}
        <div className='h-auto sm:w-[500px] border-2 border-gray-200 hover:border-blue-500 p-6'>
          <p className='font-bold text-2xl py-3'>Our Story</p>
          <p className='text-sm'>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.
            <p className='pt-5'>
              Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
            </p>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className='h-[390px] w-full sm:w-[450px] border-2 border-gray-200 hover:border-blue-500 p-4 flex items-center justify-center px-10'>
          <Image src={require("../../../public/my2.png")} alt='image' layout='responsive' objectFit='cover' />
        </div>
      </div>

      {/* Gallery Section */}
      <div className='flex flex-wrap gap-3 justify-center py-10 px-4'>
        <div className='h-auto w-full sm:w-44 border-2 border-gray-400 hover:border-blue-600 p-2'>
          <Image src={require("../../../public/Frame 701.png")} alt='image' layout='responsive' />
        </div>
        <div className='h-auto w-full sm:w-44 bg-red-600 border-2 border-gray-400 hover:border-blue-600 p-2'>
          <Image src={require("../../../public/Frame 704.png")} alt='image' layout='responsive' />
        </div>
        <div className='h-auto w-full sm:w-44 border-2 border-gray-400 hover:border-blue-600 p-2'>
          <Image src={require("../../../public/Frame 702.png")} alt='image' layout='responsive' />
        </div>
        <div className='h-auto w-full sm:w-44 border-2 border-gray-400 hover:border-blue-600 p-2'>
          <Image src={require("../../../public/Frame 703.png")} alt='image' layout='responsive' />
        </div>
      </div>

      {/* More Images Section */}
      <div className='py-10 flex flex-wrap gap-5 justify-center items-center px-4'>
        <div className='h-auto w-full sm:w-56 p-5 border-2 border-gray-400 hover:border-blue-600'>
          <Image src={require("../../../public/Frame 888.png")} alt='image' layout='responsive' />
        </div>
        <div className='h-auto w-full sm:w-56 p-5 border-2 border-gray-400 hover:border-blue-600'>
          <Image src={require("../../../public/Frame 887.png")} alt='image' layout='responsive' />
        </div>
        <div className='h-auto w-full sm:w-56 p-5 border-2 border-gray-400 hover:border-blue-600'>
          <Image src={require("../../../public/Frame 889.png")} alt='image' layout='responsive' />
        </div>
      </div>

      {/* Icons Section */}
      <div className='flex flex-wrap gap-5 justify-center py-4'>
        <div className='h-auto w-full sm:w-48 border-2 border-gray-400 hover:border-blue-600 p-1 m-4'>
          <Image src={require("../../../public/Frame 501 (1).png")} alt='image' layout='responsive' />
        </div>
        <div className='h-auto w-full sm:w-48 border-2 border-gray-400 hover:border-blue-600 p-1 m-4'>
          <Image src={require("../../../public/Frame 502 (1).png")} alt='image' layout='responsive' />
        </div>
        <div className='h-auto w-full sm:w-48 border-2 border-gray-400 hover:border-blue-600 p-1 m-4'>
          <Image src={require("../../../public/Frame 503 (1).png")} alt='image' layout='responsive' />
        </div>
      </div>
    </div>
  );
}

export default About;
