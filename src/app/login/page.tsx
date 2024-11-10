

import Image from 'next/image';

import React from 'react';


const Login = () => {
  return (
    <div className="h-full w-full font-sans flex flex-col items-center justify-center py-10 px-4 sm:px-0">
      
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        
        {/* Right Side: Image Container */}
        <div className="h-56 w-full sm:h-[450px] sm:w-[410px] bg-blue-100 border-2 border-gray-100 hover:border-blue-600 flex items-center justify-center">
          <Image 
            src={require("../../../public/phone 1.png")} 
            alt="Phone image" 
            layout="responsive" 
            width={410} 
            height={450} 
          />
        </div>
        
        {/* Left Side: Form Container */}
        <div className="h-auto w-full sm:w-80 border-2 border-gray-100 hover:border-blue-600 p-6 flex flex-col items-center space-y-4">
          
          {/* Form Heading */}
          <div className="text-center">
            <h2 className="font-bold text-xl py-2">Log in to Exclusive</h2>
            <p className="text-xs">Enter your details below</p>
          </div>
          
          {/* Form Fields */}
       
          
          <input 
            placeholder="Email or Phone Number" 
            type="text" 
            id="emailOrPhone" 
            name="emailOrPhone" 
            required 
            className="border-gray-200 border-b-2 w-full p-2 focus:outline-none focus:border-blue-500" 
          />
          
          <input 
            placeholder="Password" 
            type="password" 
            id="password" 
            name="password" 
            required 
            className="border-gray-200 border-b-2 w-full p-2 focus:outline-none focus:border-blue-500" 
          />

          {/* Action Buttons */}
          <div className="flex flex-col items-center w-full space-y-4 pt-6">
            {/* Create Account Button */}
            <button className="bg-red-700 w-24 h-10 rounded text-white">
            Log In
            </button> 
            
            
           
            
            {/* Login Link */}
            <div className="text-xs font-sans text-center text-red-600">
            Forget Password?
             
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Login;

