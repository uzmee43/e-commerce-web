"use client";
import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="w-full h-[80px] flex justify-center items-center border-b-2 bg-white">
        <nav className="w-[90%] h-full flex flex-wrap p-2 justify-between items-center mx-auto">
          {/* Logo Section */}
          <div className="text-3xl font-bold">Exclusive</div>

          {/* Navigation Links (hidden on mobile, shown when menu is open) */}
          <ul
            className={`md:flex md:items-center space-x-6 mr-3 ${
              isOpen ? "flex flex-col items-center space-y-4 mt-5" : "hidden"
            } md:flex-row md:space-y-0`}
          >
            <li className="hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </ul>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu/>
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col start-4 space-y-5">
                {/* Search Input */}
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="Search"
                  className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <li className="hover:text-gray-500">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-gray-500">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="hover:text-gray-500">
                  <Link href="/about">About</Link> 
                
                </li>
                <li className="hover:text-gray-500">
                  <Link href="/sign-up">Sign Up</Link>
                </li>
                <div>
                  {/* Icons */}
                  <IoIosHeartEmpty className="text-3xl" />
                  <MdOutlineShoppingCart className="text-3xl" />
                </div>
              </ul>
            </SheetContent>
          </Sheet>

          {/* Search and Icons Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Input */}
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              placeholder="Search"
              className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <CiSearch className="text-3xl bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2" />

            {/* Icons */}
            <IoIosHeartEmpty className="text-3xl" />
            <MdOutlineShoppingCart className="text-3xl" />
          </div>
        </nav>
      </header>
    </div>
  );
}
