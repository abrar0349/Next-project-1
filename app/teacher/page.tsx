import React from 'react';
import Sliders from '@/components/Global/Sliders';
import Teacher1 from '@/components/Global/Teachers1';

function page() {
  return (
    <div className=''
    style={{
      paddingTop : "72px"
    }}>

      <Sliders pic={'/Global/course-3.jpg'} title={'Teachers'}/>

      <Teacher1 arr = {['team-1.jpg','team-2.jpg','team-3.jpg','team-4.jpg','team-1.jpg','team-2.jpg','team-3.jpg','team-4.jpg',]} />
      
    </div>
        // <Card3 pic = {'/home/'}/>
        // <Card3 pic = {'/home/team-3.jpg'}/>
        // <Card3 pic = {'/home/team-4.jpg'}/>
  )
}

export default page
