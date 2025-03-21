"use client"
import React, { useState } from 'react'

function ContactForm() {

  const [userName , setUserName] = useState("")
  const [userEmail , setUserEmail] = useState("")
  const [subject , setSubject] = useState("")
  const [message , setMessage] = useState("")

  const userDetailObj = {
    user : userName,
    email : userEmail,
    subject,
    message

  }

  function sendUsrInfo(){
    console.log(userDetailObj)
  }
  return (
    <div 
      className='bg-gray-200 w-[100%] sm:w-[90%] md:w-[60%] flex flex-col gap-8 sm:gap-12 items-center m-auto py-10 sm:px-10 mt-10'>
      <input 
        type="text"
        placeholder='Your Name'
        value={userName}
        className='w-[95%] ps-10 py-3 border rounded-lg outline-none text-black'
        onChange={(e) => setUserName(e.target.value)}
        />
      <input 
        type="email"
        placeholder='Your Email'
        value={userEmail}
        className='w-[95%] ps-10 py-3 border rounded-lg outline-none text-black'
        onChange={(e) => setUserEmail(e.target.value)}
        />
      <input 
        type="text"
        placeholder='Subject'
        className='w-[95%] ps-10 py-3 border rounded-lg outline-none text-black'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        />
      <input 
        type="textarea"
        rows = "4"
        cols = "50"
        placeholder='Message'
        value={message}
        className='w-[95%] ps-10 py-3 border rounded-lg outline-none text-black'
        onChange={(e) => setMessage(e.target.value)}
        />
      <button 
        className='bg-orange-400 text-white py-4 px-10 border rounded-lg hover:bg-orange-600'
        onClick={() => sendUsrInfo()}
        >Send Message
      </button>
    </div>
  )
}

export default ContactForm
