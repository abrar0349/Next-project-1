"use client";

import React from 'react';
import { SiComma } from "react-icons/si";

function Slider({ about , pic}) {

  return (
  
      <div className='w-full flex flex-col items-center gap-y-7 shrink-0'
          style={{
              position : 'relative',
              right : "0%",
              // right : '122.5%',
              // right : "245%"
              
          }}
      >
        
        <p className='text-4xl font-extrabold text-orange-600 flex items-center rotate-180'> <SiComma /> <SiComma /> </p>
        <p className='text-gray-700 text-xl text-center max-w-[550px]'> {about} </p>

        <div className='h-[80px] w-[80px] rounded-full'
        style={{
          background : `url(${pic})`,
          backgroundSize : '100% 100%'
        }}
        >
        </div>

        <div className='text-center'>
          <p className='text-gray-700 text-xl text-cente'> Client Name </p>
          <p className='text-gray-500 text-sm'> Professional</p>
        </div>
      


      </div>

  )
}

export default Slider
