import React from 'react';
import Sliders from '@/components/Global/Sliders';
import About from '@/components/Global/About1';
import WhatSayStudent from '@/components/Global/WhatSayStudent'
import Form from '@/components/Global/Form';

function page(  ) {
  return (
    <div className=''
    style={{
      paddingTop : "72px"
    }}>

      <Sliders pic={'/Global/course-3.jpg'} title={'About'}/>

      <About />

      <WhatSayStudent />


      <Form />
     
    </div>
  )
}

export default page
