import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Sliders({ pic , title }) {
  return (
    <div className='w-full h-[25vw] flex flex-col justify-center gap-y-5 ps-32'
    style={{
     background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pic})`,
     backgroundSize: `100% 100%`,
     backgroundPosition : 'center',
     backgroundRepeat: 'no-repeat , no-repeat',
    }}
    >
        <h3 className='text-white font-bold text-6xl'>{title}</h3>
        <div className='text-white font-bold text-lg flex items-center gap-x-4'> <li className='list-none cursor-pointer hover:underline'>Home</li> <span><MdKeyboardDoubleArrowRight /></span> <p>{title}</p></div>


    </div>
  )
}

export default Sliders
