import React from 'react'

function Card5() {
  return (
    <div className='bg-gray-800 flex justify-center flex-col items-center pt-10 px-8 sm:px-20 border rounded-xl w-[100%] sm:w-[70%] md:w-[50%] lg:w-[100%]'>
        <div className="w-28 h-28"
        style={{
            backgroundImage: "url(/Global/user.jpg)",
            backgroundSize: '100% 100%',
            border: "2px solid transparent",
            borderRadius: '50%',
        }}
        >
            
        </div>
        <h3 className='text-orange-600 text-2xl text-center font-bold mb-20 mt-4'>John Doe</h3>
        <p className='text-white text-center text-sm sm:text-lg pb-14'>Conset elitr erat vero dollor ipsum et diam, eos dolor lorem, ipsum sit no ut est ipsum erat kasd amet elitr</p>
    </div>
  )
}

export default Card5
