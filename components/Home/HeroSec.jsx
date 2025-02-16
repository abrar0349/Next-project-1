"use client";

import React, { useEffect, useRef, useState } from 'react';

function HeroSec() {

  const circle1 = useRef()
  const circle2 = useRef()
  const circle3 = useRef()



  function changeSlide1(e){

    circle1.current.classList.add('bg-orange-600')
    circle2.current.classList.remove('bg-orange-600')
    circle3.current.classList.remove('bg-orange-600')
  
  }

  function changeSlide2(e){

    circle1.current.classList.remove('bg-orange-600')
    circle1.current.classList.add('bg-gray-600')
    circle2.current.classList.add('bg-orange-600')
    circle3.current.classList.remove('bg-orange-600')
  }

  function changeSlide3(e){

    circle1.current.classList.remove('bg-orange-600')
    circle1.current.classList.add('bg-gray-600')
    circle2.current.classList.remove('bg-orange-600')
    circle3.current.classList.add('bg-orange-600')
  }


  return (

    <div className="flex" style={{
        backgroundImage:`url('/home/carousel-1.jpg')`,
        backgroundSize:'100% 100%',
    }}>

        <div className='circle flex-1  flex flex-col justify-center ps-5 gap-y-3'>

            <div className='circle w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full cursor-pointer cursor-ponter border-circule bg-orange-600'
            ref={circle1}
            onClick={(e) => changeSlide1(e)}
            >
            </div>

            <div className='circle w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full cursor-pointer cursor-ponter border-circule bg-gray-600'
            ref={circle2}
            onClick={(e) => changeSlide2(e)}
            >
            </div>

            <div className='circle w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full cursor-pointer cursor-ponter border-circule bg-gray-600'
            ref={circle3}
            onClick={(e) => changeSlide3(e)}
            >
            </div>

            
        </div>

        <div className='flex-[5] flex flex-col justify-center items-center sm:items-start gap-y-2 md:gap-y-4 bg-cover bg-center h-screen'>

        <h3 className="text-white">BEST ONLINE COURSES</h3>
        
        <div className="child">
        <h2 className="text-2xl sm:text-3xl md:text-6xl my-1 font-bold text-white">Best Online Learning</h2>
        <h2 className="text-2xl sm:text-3xl md:text-5xl my-1 sm:my-4 font-bold text-white"> From Home </h2>
        </div>
        <button className="text-white bg-orange-400 hover:bg-orange-600 font-bold px-5 py-4 rounded-xl ">Learn More</button>

      </div>

    </div>
  )
}

export default HeroSec
