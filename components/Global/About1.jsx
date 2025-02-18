import React from 'react';

function About1() {
  return (
        <div className="flex justify-center flex-col md:flex-row px-20 h-screen items-center gap-y-6 gap-x-6 mb-16 md:mb-1">

            <div className = 'w-screen md:w-auto flex-1 h-1/2  mt-4 md:mt-0' style={{
            backgroundImage:'url(/home/about.jpg)',
            backgroundSize:'80% 100%',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',}}>

            </div>

            <div className=" w-screen sm:w-auto px-4 sm:px-0 flex-1 text-sm sm:text-xl flex flex-col  gap-y-4 ">

            <h3 className="text-orange-600 font-semibold text-xl">ABOUT US</h3>
            <h3 className = 'font-bold text-xl md:text-2xl' style={{color:'#44425A'}}> Innovative Way To Learn</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, aut, dolore ducimus iusto voluptatum architecto non aspernatur dolor pariatur commodi nesciunt quia suscipit laboriosam temporibus totam, necessitatibus deserunt omnis. Earum.</p>
            <button className="text-white bg-orange-500 hover:bg-orange-600 font-bold  py-3 rounded-xl w-44">Learn More</button>

            </div>

        </div>
    )
}

export default About1
