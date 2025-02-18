import React from 'react';
import Heading from '@/components/Home/Heading';
import Card3 from '../components/Home/Card3';

function Teachers1() {
  return (
    <>
        <Heading first ={'Teachers'} second = {'Meet Our Teachers'} />

        <div className="py-16  w-full flex justify-evenly items-center gap-y-16 flex-wrap mb-16 z-10">

            <Card3 pic = {'/home/team-1.jpg'}/>
            <Card3 pic = {'/home/team-2.jpg'}/>
            <Card3 pic = {'/home/team-3.jpg'}/>
            <Card3 pic = {'/home/team-4.jpg'}/>
            
        </div>

    </>
  )
}

export default Teachers1
