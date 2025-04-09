import React from 'react';
import Sliders from '@/components/Global/Sliders';
import Button from '@/components/Blog/Button'
import Card4_1 from '@/components/Blog/Card4_1';
import Card5 from '@/components/Blog/Card5';
import Heading from '@/components/Blog/Heading'
import Input from '@/components/Blog/Input'
import Category from '@/components/Blog/Category'
import Post from '@/components/Blog/Post'

function page() {


  return (

    <div className=''
    style={{
      paddingTop : "72px"
    }}>
      
        <Sliders pic={'/Global/course-3.jpg'} title={'Blog'}/>

        <div 
          className='flex flex-col gap-28 lg:gap-0 lg:flex-row pt-24 sm:pt-48'>

          <div 
            className="w-[90%] lg:w-[60%] flex flex-wrap gap-x-4 gap-y-0 justify-center">
            <Card4_1 pic={'home/blog-1.jpg'} />
            <Card4_1 pic={'home/blog-2.jpg'} />
            <Card4_1 pic={'home/blog-3.jpg'} />
            <Card4_1 pic={'home/blog-1.jpg'} />
            <Card4_1 pic={'home/blog-2.jpg'} />
            <Card4_1 pic={'home/blog-3.jpg'} />
          </div>

          <div
            className='w-[100%] lg:w-[40%] pl-1 sm:pl-8 pr-2 sm:pr-14'>
            <Card5 />
            <Input />
            <div>
              <Heading text={'Categories'} />
              <Category text={'Web Design'} count={'150'}/>
              <Category text={'Web Development'} count={'131'}/>
              <Category text={'Online Marketing'} count={'78'}/>
              <Category text={'Keyword Research'} count={'58'}/>
              <Category text={'Email Marketing'} count={'98'}/>
            </div>
            <div>
              <Heading text={'Recent post'} />
              <Post pic={'/home/course-6.jpg'}/>
              <Post pic={'/home/course-6.jpg'}/>
              <Post pic={'/home/course-6.jpg'}/>
            </div>
            <div>
            <Heading text={'Tag Cloud'}/>
              <div className='flex gap-4 flex-wrap '>
                <Button text={'Design'}/>
                <Button text={'Development'}/>
                <Button text={'Marketing'}/>
                <Button text={'SEO'}/>
                <Button text={'Writing'}/>
                <Button text={'Consulting'}/>
              </div>
            </div>

          </div>

        </div>
 
    </div>
  )
}

export default page
