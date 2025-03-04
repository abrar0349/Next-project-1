"use client"
import React, { useRef, useState } from 'react'

function CircleDiv({ setMove }) {

    const [cond1 , setCond1] = useState(true)
    const [cond2 , setCond2] = useState(false)
  
    const circle1 = useRef()
    const circle2 = useRef()
    const circle3 = useRef()

  function changeSlide1(e){

    circle1.current.classList.add('bg-orange-600')
    circle2.current.classList.remove('bg-orange-600')
    circle3.current.classList.remove('bg-orange-600')
    setMove(0)
    setCond1(true)
  
  }

  function changeSlide2(e){

    circle1.current.classList.remove('bg-orange-600')
    circle1.current.classList.add('bg-gray-600')
    circle2.current.classList.add('bg-orange-600')
    circle3.current.classList.remove('bg-orange-600')

    setMove(100)
    setCond1(false)
    setCond2(true)
  }

  function changeSlide3(e){

    circle1.current.classList.remove('bg-orange-600')
    circle1.current.classList.add('bg-gray-600')
    circle2.current.classList.remove('bg-orange-600')
    circle3.current.classList.add('bg-orange-600')

    setMove(200)
    setCond1(false)
    setCond2(false)
  }


  return (

      <div className=' w-full h-[10%] flex  justify-center items-center gap-x-2'>

          <div className=' w-[30px] h-[30px] rounded-full cursor-pointer bg-orange-600'
            ref={circle1}
            onClick={(e) => changeSlide1(e)}
          >
          </div>

          <div className=' w-[30px] h-[30px] rounded-full cursor-pointer  bg-gray-600'
            ref={circle2}
            onClick={(e) => changeSlide2(e)}
          >
          </div>

          <div className=' w-[30px] h-[30px] rounded-full  cursor-pointer  bg-gray-600'
            ref={circle3}
            onClick={(e) => changeSlide3(e)}
          >
          </div>
            
      </div> 
  )
}

export default CircleDiv
