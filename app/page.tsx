import HeroSec from '../components/Home/HeroSec';
import Form from '../components/Global/Form'
import About from '@/components/Global/About1';
import Course1 from '@/components/Global/Course1';
import Course2 from '@/components/Global/Course2';
import Teacher1 from '@/components/Global/Teachers1';
import WhatSayStudent from '@/components/Global/WhatSayStudent';
import Blogs from '@/components/Global/Blogs'



export default function Home() {

  return (
    <>
      <HeroSec />

      <About />

      <Course1 />
      
      <Course2 />

      <Form />

      <Teacher1 arr = {['team-1.jpg','team-2.jpg','team-3.jpg','team-4.jpg']} />
    
      <WhatSayStudent />      

      <Blogs />
    

    </>
  );
}
