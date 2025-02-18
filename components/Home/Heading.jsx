import React from 'react'

function Heading({first , second}) {
  return (
    <div className='flex flex-col items-center justify-center mt-24 '>
         <h3 className="text-orange-600 font-semibold text-sm md:text-xl text-center tracking-extra">
            {first} </h3>
         <h3 className = 'font-bold text-xl md:text-3xl mt-5' style={{color:'#44425A'}}> {second} </h3>
    </div>
  )
}

export default Heading
