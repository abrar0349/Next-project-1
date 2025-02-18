import React from 'react';
import Heading from '@/components/Home/Heading';
import Card2 from '@/components/Home/Card2';

function Course2() {
  return (
    <>
        <Heading first ={'Courses'} second = {'Our Popular Courses'} />
        <div className='py-20 w-full flex gap-x-10 gap-y-10 justify-evenly items-center flex-wrap mb-16'>
        <Card2 pic = {'/home/course-1.jpg'}/>
        <Card2 pic = {'/home/course-2.jpg'}/>
        <Card2 pic = {'/home/course-3.jpg'}/>
        <Card2 pic = {'/home/course-4.jpg'}/>
        <Card2 pic = {'/home/course-5.jpg'}/>
        <Card2 pic = {'/home/course-6.jpg'}/>
        </div>
    </>
  )
}

export default Course2
