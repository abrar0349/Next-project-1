'use client'

import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";

function Form() {
    const [usrObj , setUsrObj] = useState({
        usrName : '',
        usrEmail : '',
        usrCourse : ''
    })

    function submitUsrInfor(){
        console.log(usrObj)
    }
  return (
    <div
    className=' w-full py-20 mb-8 flex flex-col md:flex-row justify-center items-center gap-x-6'
     style={{
        background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url(/home/registration.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPostion: 'center',
        backgroundSize: 'cover'
    }}
    >
      <div className='w-[90%] md:w-[45%] flex flex-col items-start mb-8'>
        <h2
        className='text-orange-600 tracking-widest my-8'
        >Need Any Courses</h2>

        <h3 className='text-2xl sm:text-5xl font-extrabold text-white mb-2'>30% Off For New</h3>
        <h3 className='text-2xl sm:text-5xl font-extrabold text-white' >Students</h3>

        <p className='text-white my-6'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>

        <p className='text-white flex items-center mb-2'><span className='text-orange-600 pe-4 text-3xl'><TiTick /></span>Labore eos amet dolor amet diam</p>
        <p className='text-white flex items-center mb-2'><span className='text-orange-600 pe-4 text-3xl'><TiTick /></span>Etsea et sit dolor amet ipsum</p>
        <p className='text-white flex items-center mb-4'><span className='text-orange-600 pe-4 text-3xl'><TiTick /></span>Diam dolor diam elitripsum vero.</p>

      </div>

      <div className=' w-[80%] md:w-[40%] flex flex-col items-start rounded-lg overflow-hidden'>
        <div className='bg-white w-full flex justify-center'>
            <h2 className='text-4xl text-gray-600 font-extrabold py-3'> Sign Up  Now </h2>
        </div>
        <div className='bg-orange-600 h-[70vh] w-full flex flex-col gap-y-5 justify-center items-center '>
            <input type="text"
            value={usrObj.usrName}
            onChange={(e) => {
                setUsrObj({...usrObj, usrName : e.target.value})
            }}
            className='py-3 sm:py-4 px-4 sm:px-8 rounded-lg outline-none'
            placeholder='Your name' />

            <input type="email"
            value={usrObj.usrEmail}
            onChange={(e) => {
                setUsrObj({...usrObj, usrEmail : e.target.value})
            }}
            className='py-3 sm:py-4 px-4 sm:px-8 rounded-lg outline-none'
            placeholder='Your email' />

            <select name="" id=""
            className='py-3 sm:py-4 px-14 sm:px-16 rounded-lg outline-none'
            value={usrObj.usrCourse}
            onChange={(e) => {
                setUsrObj({...usrObj, usrCourse : e.target.value})
            }}
            >
                <option 
                value="select a course">select a course</option>
                <option value="Course 1">Course 1</option>
                <option value="Course 1">Course 2</option>
                <option value="Course 1">Course 3</option>
            </select>

            <button
            className='px-20 sm:px-24 py-3 hover:bg-gray-600 bg-gray-500 rounded-lg text-white font-bold'
            onClick={() => {
                submitUsrInfor()
            }}
            >
                Sign up
            </button>
        </div>
      </div>
 
    </div>
  )
}

export default Form
