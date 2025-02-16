import React from 'react'

function Card1({ pic ,courseTitle, courseAmount}) {
    
  return (
  <div className=' w-[90%] sm:w-[250px] h-[250px] sm:h-[150px] overflow-hidden cursor-pointer border rounded-lg'>
        <div className='w-full h-full  flex items-center justify-center flex-col hover:scale-125 transition-all' style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center' }}>

            <p className='text-white text-xl sm:text-sm md:text-xl font-bold text-center bg-gray-300'>{courseTitle}</p>
            <p className='text-white text-2xl sm:text-xs md:text-sm font-bold text-center'>{courseAmount}</p>

        </div>
  </div>
  )
}

export default Card1
