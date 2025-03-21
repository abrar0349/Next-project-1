import React from 'react';
import Sliders from '@/components/Global/Sliders';
import Heading from '@/components/Home/Heading';
import ContactForm from '@/components/Global/ContactForm'

function page() {
  return (
    <div className=''
    style={{
      paddingTop : "72px"
    }}>

      <Sliders pic={'/Global/course-3.jpg'} title={'Contact'}/>
      
      <Heading first ={'CONTACT'} second = {'Contact For Any Query'} />

      <ContactForm />

      
    </div>
  )
}

export default page
