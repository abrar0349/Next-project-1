// import Card1 from '../components/Home/Card1';
import Heading from '../components/Home/Heading';
// import Card2 from '../components/Home/Card2';
import HeroSec from '../components/Home/HeroSec';
import Form from '../components/Global/Form'
// import Card3 from '../components/Home/Card3'
import Slider from '../components/Home/Slider'
import CircleDiv from '../components/Home/CircleDiv'
import About from '@/components/Global/About1';
import Course1 from '@/components/Global/Course1';
import Course2 from '@/components/Global/Course2';
import Teacher1 from '@/components/Global/Teachers1';



export default function Home() {

  return (
  <>
   
    <HeroSec />

    <About />

    <Course1 />
    
    <Course2 />

    <Form />

    <Teacher1 arr = {['team-1.jpg','team-2.jpg','team-3.jpg','team-4.jpg']} />
   
    {/* Seventh section start from here  */}
    <Heading first ={'Testimonial'} second = {'What Say Our Students'} />

    <div className='w-full h-screen pt-42 flex flex-col justify-center items-center border border-red-600'>
        <div className='border border-red-600 w-1/2 h-[65%] flex  overflow-hidden flex-nowrap gap-x-36 transition-all'>
          <Slider 
          about = {'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, omnis eum labore dicta, iste nihil aut reprehenderit aliquid animi exercitationem eveniet nulla quo officiis incidunt enim impedit, aspernatur illum dolor!'}
          pic = {'/home/testimonial-1.jpg'}
          />
             <Slider 
          about = {'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, omnis eum labore dicta, iste nihil aut reprehenderit aliquid animi exercitationem eveniet nulla quo officiis incidunt enim impedit, aspernatur illum dolor!'}
          pic = {'/home/testimonial-2.jpg'}
          />
             <Slider 
          about = {'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, omnis eum labore dicta, iste nihil aut reprehenderit aliquid animi exercitationem eveniet nulla quo officiis incidunt enim impedit, aspernatur illum dolor!'}
          pic = {'/home/testimonial-3.jpg'}
          />
        </div>
        <CircleDiv />
    </div>

 

  </>
  );
}
