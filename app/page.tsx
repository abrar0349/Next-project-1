import Card1 from '../components/Home/Card1';
import Heading from '../components/Home/Heading';
import Card2 from '../components/Home/Card2';
// import home from '@/public/carousel-1.jpg';


export default function Home() {

  return (
  <>
    <div className=" flex flex-col items-center justify-center gap-y-10 bg-cover bg-center h-screen" style={{
      backgroundImage:`url('/home/carousel-1.jpg')`,
      backgroundSize:'100% 100%',
      }}>
      <h3 className="text-white">BEST ONLINE COURSES</h3>
     
      <div className="child">
        <h2 className="text-2xl sm:text-3xl md:text-6xl my-1 font-bold text-white">Best Online Learning</h2>
        <h2 className="text-2xl sm:text-3xl md:text-6xl my-4 font-bold text-white"> From Home </h2>
      </div>
      <button className="text-white bg-orange-400 hover:bg-orange-600 font-bold px-5 py-4 rounded-xl ">Learn More</button>
    </div>

    <div className="flex justify-center flex-col md:flex-row px-20 h-screen items-center gap-y-6 gap-x-6 mb-16 md:mb-1">

      <div className = 'flex-1 h-1/2 ' style={{
        backgroundImage:'url(/home/about.jpg)',
        backgroundSize:'80% 100%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'right',}}>

      </div>

      <div className="text-sm sm:text-xl flex-1 flex flex-col  gap-y-4">
        <h3 className="text-orange-600 font-semibold text-xl">ABOUT US</h3>
        <h3 className = 'font-bold text-xl md:text-2xl' style={{color:'#44425A'}}> Innovative Way To Learn</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, aut, dolore ducimus iusto voluptatum architecto non aspernatur dolor pariatur commodi nesciunt quia suscipit laboriosam temporibus totam, necessitatibus deserunt omnis. Earum.</p>
        <button className="text-white bg-orange-400 hover:bg-orange-600 font-bold  py-3 rounded-xl w-44">Learn More</button>
      </div>
    
    </div>

    {/* third section start from here  */}

 

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


    {/* fourth section start from here  */}

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
  );
}
