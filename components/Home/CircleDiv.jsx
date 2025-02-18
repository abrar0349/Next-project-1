"use client"
import React, { useRef, useState } from 'react'

function CircleDiv() {

    const [cond1 , setCond1] = useState(true)
    const [cond2 , setCond2] = useState(false)
  
    const circle1 = useRef()
    const circle2 = useRef()
    const circle3 = useRef()

  function changeSlide1(e){

    circle1.current.classList.add('bg-orange-600')
    circle2.current.classList.remove('bg-orange-600')
    circle3.current.classList.remove('bg-orange-600')
    setCond1(true)
  
  }

  function changeSlide2(e){

    circle1.current.classList.remove('bg-orange-600')
    circle1.current.classList.add('bg-gray-600')
    circle2.current.classList.add('bg-orange-600')
    circle3.current.classList.remove('bg-orange-600')

    setCond1(false)
    setCond2(true)
  }

  function changeSlide3(e){

    circle1.current.classList.remove('bg-orange-600')
    circle1.current.classList.add('bg-gray-600')
    circle2.current.classList.remove('bg-orange-600')
    circle3.current.classList.add('bg-orange-600')

    setCond1(false)
    setCond2(false)
  }


  return (

      <div className=' w-full h-[10%] flex  justify-center border border-blue-800'>

          <div className='circle .border-circule w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full cursor-pointer cursor-ponter border-circule bg-orange-600'
          ref={circle1}
          onClick={(e) => changeSlide1(e)}
          >
          </div>

          <div className='circle .border-circule w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full cursor-pointer cursor-ponter border-circule bg-gray-600'
          ref={circle2}
          onClick={(e) => changeSlide2(e)}
          >
          </div>

        <div className='border border-orange-600 rounded-full border-circle2'>

          <div className='circle .border-circule2 w-[1px] sm:w-[40px] h-[1px] sm:h-[40px] rounded-full cursor-pointer cursor-ponter  bg-gray-600'
            ref={circle3}
            onClick={(e) => changeSlide3(e)}
            >
            </div>
        </div>
            
      </div> 
  )
}

export default CircleDiv
