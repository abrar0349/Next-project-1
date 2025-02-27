import React from 'react';
import Sliders from '@/components/Global/Sliders';
import Course1 from '@/components/Global/Course1';
import Course2 from '@/components/Global/Course2';

function page() {
  return (
    <div className=''
    style={{
      paddingTop : "72px"
    }}>

      <Sliders pic={'/Global/course-3.jpg'} title={'Courses'}/>

      <Course1 />
      <Course2 />
  
     
    </div>
  )
}

export default page
