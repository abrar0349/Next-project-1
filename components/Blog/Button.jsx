import React from 'react'

function Button({text}) {
  return (
    <h2
    className='border border-orange-600 rounded-lg inline-block py-2 px-6 text-orange-600 hover:bg-orange-600 cursor-pointer hover:text-white'
    > {text} </h2>
  )
}
export default Button
