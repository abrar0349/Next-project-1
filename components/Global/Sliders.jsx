import React from 'react';
import Link  from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Sliders({ pic , title }) {
  return (
    <div className='w-full h-[40vh] md:h-[60vh] flex flex-col justify-center gap-y-2 md:gap-y-5 ps-3 md:ps-32'
    style={{
     background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pic})`,
     backgroundSize: `100% 100%`,
     backgroundPosition : 'center',
     backgroundRepeat: 'no-repeat , no-repeat',
    }}
    >
        <h3 className='text-white font-bold text-xl sm:text-3xl md:text-6xl'>{title}</h3>
        <div className='text-white font-bold text-sm md:text-lg flex items-center gap-x-2 md:gap-x-4'> <Link href = '/' className='list-none cursor-pointer hover:underline'>Home</Link> <span><MdKeyboardDoubleArrowRight /></span> <p>{title}</p></div>


    </div>
  )
}

export default Sliders
