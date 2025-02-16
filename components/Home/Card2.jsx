import React from 'react';
import { PiStudentBold } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

function Card2({pic}) {
  return (
    <div className="flex flex-col w-[90%] sm:w-[300px] h-[450px] border rounded-xl">

      <div className='h-[60%] sm:h-[40%]'
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      

      </div>

     <div className='h-[40%] sm:h-[60%] w-full px-4'
     style={{ 
        backgroundColor: '#F2F1F8',
    }}
      >
        <div className="flex justify-between py-1 sm:py-2 text-sm">
           <p className='flex items-center'
            style={{color:'#867B9A'}}> <span className='pe-2 text-orange-600 '> <PiStudentBold /> </span> 25 Students</p>
           <p className='flex items-center'
            style={{color:'#867B9A'}}
            > <span className='pe-2 text-orange-600 '> <FaRegClock /> </span>01h 30m</p>
        </div>
        <div className='border-b-2 py-4 sm:py-14 w-[80%] flex flex-col items-center mx-10 text-xl'>
           <h5>Web Design &</h5>
           <h5>Development Courses</h5>
           <h5>for beginner</h5>
        </div>

        <div className="flex items-center text-sm justify-between py-2">
          <p className='flex items-center'
             style={{color:'#867B9A'}}
             > <span className='pe-2 text-orange-600 text-xl'> <IoMdStar /></span>4.5 (250)</p>
          <p>$ 99</p>
        </div>
     </div>    
    </div>
  )
}

export default Card2
