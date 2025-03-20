import React from 'react'

function Card4({ pic }) {

  return (
    <div className = "overflow-hidden w-[80%] sm:w-[50%] md:w-[30%] h-[60vh] cursor-pointer relative" >
        <div
         className="w-full h-full  hover:scale-110"
         style={{
             background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${pic})`,
             backgroundSize :  '100% 100%',
             backgroundRepeat  : 'no-repeate',
        }}
        >

            
        </div>
        <div className='flex flex-col justify-end gap-y-2 px-6 pb-8 absolute bottom-6 z-10'>
          <p className='text-white text-xl scale-100'>hello every one</p>
          <h5 className = 'text-orange-600 text-sm scale-100'>June 01, 2045</h5>
        </div>
      
    </div>
  )
}

export default Card4
