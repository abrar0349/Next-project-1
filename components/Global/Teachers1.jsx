import React from 'react';
import Heading from '@/components/Home/Heading';
import Card3 from '@/components/Home/Card3';

function Teachers1(
  {arr}
) {
  return (
    <>
        <Heading first ={'Teachers'} second = {'Meet Our Teachers'} />

        <div className="py-16  w-full flex gap-x-8 justify-cente items-center gap-y-16 flex-wrap mb-16 z-10">

          {arr.map(
            (pic) => {
              return <Card3 pic = {`/home/${pic}`}/>
            }
          )}  
        
            
        </div>

    </>
  )
}

export default Teachers1
