import React from 'react'

function Category({text , count}) {
  return (
    <div
     className='border border-transparent border-b-gray-400 flex justify-between pb-1 mb-4'>
      <p 
       className='text-gray-600 cursor-pointer hover:text-orange-900 font-bold'>{text}
      </p>
      <p 
       className='text-white bg-orange-500 border rounded-lg px-2 text-sm'>
        {count}
      </p>
    </div>
  )
}

export default Category
