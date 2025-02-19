'use client';

import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import  Link  from "next/link";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex justify-between pt-6 md:pt-4 pb-4 flex-col md:flex-row p-2 fixed w-full" style={{backgroundColor : 'white',zIndex : '999'}}>
      {/* Logo and Hamburger Icon */}
      <div className="ps-4 lg:ps-5 pe-4 lg:pe-5 flex justify-between">
        <Link href="/" className="flex justify-center cursor-pointer pt-2 md:pt-2">
          <CgWebsite />
          <span className="w-32 font-bold">Web-Developer</span>
        </Link>

        <button
          onClick={() => setNavOpen(!navOpen)}
          className = {`text-3xl cursor-pointer block md:hidden `}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-1  flex-col md:flex-row justify-evenly gap-y-4 ${
          navOpen ? "flex" : "hidden"
        } md:flex fixed z-10 top-16 bottom-0 left-0 right-0 md:static bg-white`}
      >
        <ul className="flex flex-col md:flex-row items-center md:justify-between gap-x-5 gap-y-4">
         <Link href = "/" className="underline text-orange-500   cursor-pointer underline-offset-4">Home</Link> 
         <Link href = "/about" className="hover:underline hover:text-orange-500 p-2  cursor-pointer underline-offset-4 transition-all">
            About
          </Link> 
         <Link href = "/course" className="hover:underline hover:text-orange-500 p-2  cursor-pointer underline-offset-4 transition-all">
            Courses
          </Link> 
         <Link href = "/teacher" className="hover:underline hover:text-orange-500 p-2  cursor-pointer underline-offset-4 transition-all">
            Teachers
          </Link> 
         <Link href = "/blog" className="flex hover:underline hover:text-orange-500 p-2  cursor-pointer underline-offset-4 transition-all">
            Blog <IoMdArrowDropdown />
          </Link> 
         <Link href = "/contact" className="hover:underline hover:text-orange-500 p-2  cursor-pointer underline-offset-4 transition-all">
            Contact
          </Link> 
        </ul>
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 cursor-pointer">
          Join Now
        </button>
      </div>
    </nav>
  );
}
