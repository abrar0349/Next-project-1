import React from 'react'

function Post({pic}) {
  return (
    <div
     className='flex flex-col sm:flex-row gap-4 cursor-pointer text-orange-600 hover:text-orange-800 mb-6'>
        <div
         className='border border-transparent rounded-lg w-[24%]  sm:w-[16%] md:w-[9%] lg:w-[30%] h-[90px] sm:h-[auto]'
         style={{
            backgroundImage : `url(${pic})`,
            backgroundSize :  '100% 100%',
            backgroundRepeat  : 'no-repeate',
         }}
         >

        </div>
        <div className='text-sm sm:text-lg'>
            <p 
             className='text-gray-600 font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe animi</p>
            <p>Jan 1, 2045</p>
        </div>
      
    </div>
  )
}

export default Post
