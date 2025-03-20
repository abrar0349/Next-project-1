"use client";

import React, { useEffect, useRef, useState } from 'react';

function HeroSec() {

  const [cond1 , setCond1] = useState(true)
  const [cond2 , setCond2] = useState(false)

  const circle1 = useRef()
  const circle2 = useRef()
  const circle3 = useRef()



  function changeSlide1(e){

    circle1.current.classList.add('bg-orange-600')
    circle2.current.classList.remove('bg-orange-600')
    circle3.current.classList.remove('bg-orange-600')
    setCond1(true)
    setTimeout(() => {
      changeSlide2()
    },60000)
  
  }

  useEffect(() => {
      changeSlide1()
  } , [])

  function changeSlide2(e){

    circle1.current.classList.remove('bg-orange-600')
    circle1.current.classList.add('bg-gray-600')
    circle2.current.classList.add('bg-orange-600')
    circle3.current.classList.remove('bg-orange-600')

    setCond1(false)
    setCond2(true)

    setTimeout(() => {
      changeSlide3()
    },60000)
  }

  function changeSlide3(e){

    circle1.current.classList.remove('bg-orange-600')
    circle1.current.classList.add('bg-gray-600')
    circle2.current.classList.remove('bg-orange-600')
    circle3.current.classList.add('bg-orange-600')

    setCond1(false)
    setCond2(false)

    setTimeout(() => {
      changeSlide1()
    },60000)
  }


  return (

    <div className="flex transition-all" 
    style={{
         backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), ${
      cond1
        ? `url('/home/carousel-1.jpg')`
        : cond2
        ? `url('/home/carousel-2.jpg')`
        : `url('/home/carousel-3.jpg')`
    }`,
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
        <h2 className="text-2xl sm:text-3xl md:text-6xl my-1 font-bold text-white"> { cond1 ?  "Best Education From" : (cond2 ? "Best Online Learning"  : "New Way To Learn")  }</h2>
        <h2 className="text-2xl sm:text-3xl md:text-5xl my-1 sm:my-4 font-bold text-white"> { cond1 ? "Your Home" : (cond2 ? "Plateform" : "From Home")} </h2>
        </div>
        <button className="text-white bg-orange-400 hover:bg-orange-600 font-bold px-5 py-4 rounded-xl ">Learn More</button>

      </div>

    </div>
  )
}

export default HeroSec
