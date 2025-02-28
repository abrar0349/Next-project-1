'use client'
import React, { useState } from 'react';
import Slider from '@/components/Home/Slider';
import CircleDiv from '@/components/Home/CircleDiv';
import Heading from '@/components/Home/Heading';

function WhatSayStudent() {

  const [move , setMove] = useState(0)

  return (
    <>
        <Heading first ={'Testimonial'} second = {'What Say Our Students'} />

        <div className='w-full h-screen  flex flex-col justify-center items-center border border-red-600'>

        <div 
            className=' w-[90%] sm:w-1/2 h-[50%] sm:h-[65%] flex flex-nowrap overflow-hidden'>
            <Slider 
             movement={move}
             about = {'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, omnis eum labore dicta, iste nihil aut reprehenderit aliquid animi exercitationem eveniet nulla quo officiis incidunt enim impedit, aspernatur illum dolor!'}
             pic = {'/home/testimonial-2.jpg'}
        />

            <Slider 
              movement={move}
              about = {'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, omnis eum labore dicta, iste nihil aut reprehenderit aliquid animi exercitationem eveniet nulla quo officiis incidunt enim impedit, aspernatur illum dolor!'}
              pic = {'/home/testimonial-1.jpg'}
            />

            <Slider 
              movement={move}
              about = {'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, omnis eum labore dicta, iste nihil aut reprehenderit aliquid animi exercitationem eveniet nulla quo officiis incidunt enim impedit, aspernatur illum dolor!'}
              pic = {'/home/testimonial-3.jpg'}
            />
        </div>

        <CircleDiv setMove = {setMove} />

        </div>

    </>
  )
}

export default WhatSayStudent
