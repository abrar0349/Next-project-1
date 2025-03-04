import React from 'react';
import Heading from '@/components/Home/Heading';
import Card4 from '../Home/Card4';

function Blogs() {
  return (
    <>
       <Heading first ={'OUR BLOG'} second = {'Latest From Our Blog'} />

       <div className= "flex justify-center flex-wrap gap-x-5 gap-y-6 pt-7">
            <Card4 pic={'home/blog-1.jpg'}/>
            <Card4 pic={'home/blog-2.jpg'}/>
            <Card4 pic={'home/blog-3.jpg'}/>
       </div> 
    </>
  )
} 

export default Blogs
