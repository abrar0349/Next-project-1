import React from 'react'

function Post({pic}) {
  return (
    <div
     className='flex gap-4 cursor-pointer text-orange-600 hover:text-orange-800 mb-6'>
        <div
         className='border border-transparent rounded-lg w-[30%] '
         style={{
            backgroundImage : `url(${pic})`,
            backgroundSize :  '100% 100%',
            backgroundRepeat  : 'no-repeate',
         }}
         >

        </div>
        <div className=''>
            <p 
             className='text-gray-600 font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe animi</p>
            <p>Jan 1, 2045</p>
        </div>
      
    </div>
  )
}

export default Post
