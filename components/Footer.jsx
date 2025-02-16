"use client"
import React, { useState } from 'react';

import { FaMapMarkerAlt } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { MdKeyboardArrowRight } from "react-icons/md"

function Footer() {
 const [email , setEmail] =  useState('')
  return (
    <div className='w-full flex justify-between flex-col sm:flex-row px-10 flex-wrap'
    style={{
        backgroundColor: '#44425A',
    }}>
        <div className='flex flex-col text-white my-16 gap-y-12 flex-1  px-10'>

          <h2 className='text-orange-600 text-2xl tracking-extra font-semibold'> Get In Touch </h2>

          <div>
            <p className='flex items-center'><span className='pe-5'><FaMapMarkerAlt /></span>123 Street, New York, USA</p>
            <p className='flex items-center'><span className='pe-5'><PiPhoneFill /></span>+012 345 67890</p>
            <p className='flex items-center'><span className='pe-5'><IoIosMail /></span>mail@domain.com</p>
          </div>

          <div className='flex justify-between pe-5'>

            <div className='border border-white rounded-lg p-2 hover:bg-white hover:text-black cursor-pointer'>
              <FaTwitter />
            </div>
            <div className='border border-white rounded-lg p-2 hover:bg-white hover:text-black cursor-pointer'>
              <FaFacebookF />
            </div>
            <div className='border border-white rounded-lg p-2 hover:bg-white hover:text-black cursor-pointer'>
              <FaLinkedinIn />
            </div>
            <div className='border border-white rounded-lg p-2 hover:bg-white hover:text-black cursor-pointer'>
              <FaInstagram />
            </div>
          
          </div>

        </div>

        <div className='flex flex-col text-white my-16 gap-y-12 flex-1 px-10 '>

          <h2 className='text-orange-600 text-2xl tracking-extra font-semibold text-center'> Our Courses </h2>

          <div>
            <p className='flex items-center cursor-pointer hover:underline'><span className='pe-3'><MdKeyboardArrowRight /></span>Web Design</p>
            <p className='flex items-center cursor-pointer hover:underline'><span className='pe-3'><MdKeyboardArrowRight /></span>Apps Design</p>
            <p className='flex items-center cursor-pointer hover:underline'><span className='pe-3'><MdKeyboardArrowRight /></span>Marketing</p>
            <p className='flex items-center cursor-pointer hover:underline'><span className='pe-3'><MdKeyboardArrowRight /></span>Search</p>
            <p className='flex items-center cursor-pointer hover:underline'><span className='pe-3'><MdKeyboardArrowRight /></span>SEO</p>
          </div>

        </div>

        <div className='flex flex-col text-white my-16 gap-y-12 flex-[2]'>

          <h2 className='text-orange-600 text-2xl tracking-extra font-semibold'> Newsletter</h2>

          <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>

          <form className='border rounded-lg flex items-center overflow-hidden focus-within:border-orange-600'>
            <input type="email" 
            placeholder='Your Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[70%] outline-none py-5 ps-10 text-sm text-black caret-orange-600'
            // autoFocus
            />
            <button 
            onClick={(e) => {
              e.preventDefault()
            }}
            type = 'submit'
            className='w-[30%] text-sm md:text-lg  bg-orange-500 active:bg-orange-600 text-white font-semibold whitespace-nowrap py-4 '>
                Sign Up
            </button>
          </form>

        </div>
      
    </div>
  )
}

export default Footer
