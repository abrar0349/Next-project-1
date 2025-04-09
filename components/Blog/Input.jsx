'use client'
import React from 'react'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";

function Input() {

    const [email , setEmail] =  useState('')


  return (
     <form className='border border-gray-400 rounded-lg flex overflow-hidden w-[70%] mt-10'>
                <input type="email" 
                placeholder='Keywords'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-[90%] outline-none py-2 ps-10 text-sm text-black caret-orange-600'
                // autoFocus
                />
                <button 
                onClick={(e) => {
                  e.preventDefault()
                }}
                type = 'submit'
                className='w-[20%] text-orange-500 whitespace-nowrap py-2 md:py-4 border border-s-gray-500 ps-5 text-xl'>
                    <CiSearch />

                </button>
              </form>
  ) 
}

export default Input
