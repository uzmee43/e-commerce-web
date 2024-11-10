import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="body-font bg-black text-white h-auto w-full">
      <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row">
        {/* Left Section: Download App */}
        <div className="w-full md:w-64 flex-shrink-0 text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-white-900">
            <span className="ml-3 text-xl">Download App</span>
          </a>
          <p className="mt-2 text-sm text-white-500">
            Save $3 with App New User Only
          </p>
        </div>

        {/* Main Links Section */}
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center">
          {['Exclusive', 'Support', 'Account', 'Quick Link'].map((title, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                {title}
              </h2>
              <nav className="list-none mb-10">
                {title === 'Exclusive' && (
                  <>
                    <li>
                      <a className="text-white hover:text-gray-400">Subscribe</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">Get 10% off your first order</a>
                    </li>
                    <li>
                      <input className='bg-black border-2 border-white placeholder-gray-400' placeholder='Enter your email' type="text" />
                    </li>
                  </>
                )}
                {title === 'Support' && (
                  <>
                    <li>
                      <a className="text-white hover:text-gray-400">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">exclusive@gmail.com</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">+88015-88888-9999</a>
                    </li>
                  </>
                )}
                {title === 'Account' && (
                  <>
                    <li>
                      <a className="text-white hover:text-gray-400">My Account</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">Login / Register</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">Cart</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">Wishlist</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">Shop</a>
                    </li>
                  </>
                )}
                {title === 'Quick Link' && (
                  <>
                    <li>
                      <a className="text-white hover:text-gray-400">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">Terms Of Use</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">FAQ</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400">Contact</a>
                    </li>
                  </>
                )}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* QR Code and Social Media Icons Section */}
      <div className='flex flex-col items-center md:items-end justify-center p-20'>
        {/* QR Code */}
        <div className='mb-2'>
          <Image 
            src={require("./../../../public/Qrcode 1.pngmap.png")} 
            alt='QR code' 
            width={100} // Set desired width for the QR code
            height={100} // Set desired height for the QR code
            layout='fixed' // Using 'fixed' layout to ensure the size remains constant
          />
        </div>
        
        {/* Social Media Icons */}
        <div className="bg-white-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap justify-center md:justify-end">
            <span className="inline-flex justify-center sm:justify-start mb-4 md:mb-0">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a key={platform} className="ml-3 text-white">
                  {/* Replace these paths with the actual paths to SVG icons */}
                  {platform === 'facebook' && (
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )}
                  {platform === 'twitter' && (
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  )}
                  {platform === 'instagram' && (
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  )}
                  {platform === 'linkedin' && (
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  )}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
