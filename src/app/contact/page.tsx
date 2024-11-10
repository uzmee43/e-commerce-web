import Link from 'next/link';
import React from 'react';
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='h-full w-full'>
      <div className='py-16 px-4 font-bold sm:px-12'>
        <Link href={"/"}><samp className='text-gray-700'> Home/</samp>Contact</Link>
      </div>
      
      <div className='flex flex-col sm:flex-row py-10 px-4 sm:px-36 gap-4'>
        
        {/* Left Side: Contact Information */}
        <div className='h-auto w-full sm:w-[300px] border border-gray-200 hover:border-blue-500 p-4'>
          <div className="flex items-center space-x-2 my-5">
            <div className="h-10 w-10 bg-red-600 flex items-center justify-center rounded-full">
              <LuPhone className="text-white" />
            </div>
            <p>Call To Us</p>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p className='pt-2'>Phone: +8801611112222</p>
          <div className='h-1 w-full bg-gray-300 my-4'></div>
          
          <div className="flex items-center space-x-2 my-5">
            <div className="h-10 w-10 bg-red-600 flex items-center justify-center rounded-full">
              <MdOutlineEmail className="text-white" />
            </div>
            <p>Write To Us</p>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p className='pt-2'>Emails: customer@exclusive.com</p>
          <p className='pt-2'>Emails: support@exclusive.com</p>
        </div>
        
        {/* Right Side: Contact Form */}
        <div className='h-auto w-full sm:w-[700px] border border-gray-200 hover:border-blue-500 p-4'>
          <form action="">
            <div className='flex flex-col sm:flex-row gap-4 py-4'>
              <input className='border-2 border-gray-200 bg-slate-200 pl-4 py-2 w-full' type="text" placeholder='Your Name' id="name" name="name" required />
              <input className='border-2 border-gray-200 bg-slate-200 pl-4 py-2 w-full' type="email" placeholder='Your Email' id="email" name="email" required />
              <input className='border-2 border-gray-200 bg-slate-200 pl-4 py-2 w-full' type="text" placeholder='Your Phone' id="phone" name="phone" required />
            </div>
            
            <div className='py-4'>
              <label htmlFor="message"></label>
              <textarea className='border-2 border-gray-200 bg-slate-200 pl-4 py-2 w-full' placeholder='Your Message' rows={10} id="message" name="message" required></textarea>
            </div>
            
            <div className="flex justify-end items-start pb-4">
              <button className="border-none bg-red-600 text-white py-2 px-8 rounded-md">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
