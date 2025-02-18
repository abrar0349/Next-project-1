import React from 'react';
import Card1 from '@/components/Home/Card1';
import Heading from '@/components/Home/Heading';

function Course1() {
  return (
    <>
       <Heading first = {'SUBJECTS'} second = {'EXPLORE TOP SUBJECTS'}/>

    <div className="py-20  w-full flex gap-x-10 gap-y-10 justify-evenly items-center flex-wrap mb-16">
        <Card1 pic = {'/home/cat-1.jpg'} courseTitle={'Web Design'}  courseAmount={'100 Courses'}/>
        <Card1 pic = {'/home/cat-2.jpg'} courseTitle={'Development'}  courseAmount={'100 Courses'}/>
        <Card1 pic = {'/home/cat-3.jpg'} courseTitle={'Game Design'}  courseAmount={'100 Courses'}/>
        <Card1 pic = {'/home/cat-4.jpg'} courseTitle={'Apps Design'}  courseAmount={'100 Courses'}/>

        <Card1 pic = {'/home/cat-5.jpg'} courseTitle={'Marketing'}  courseAmount={'100 Courses'}/>
        <Card1 pic = {'/home/cat-6.jpg'} courseTitle={'Research'}  courseAmount={'100 Courses'}/>
        <Card1 pic = {'/home/cat-7.jpg'} courseTitle={'Content Writing'}  courseAmount={'100 Courses'}/>
        <Card1 pic = {'/home/cat-8.jpg'} courseTitle={'SEO'}  courseAmount={'100 Courses'}/>
    </div>
    </>
  )
}

export default Course1
