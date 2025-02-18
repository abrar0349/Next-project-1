import React from 'react';


import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import SocialIcon from './SocialIcon'

function Card3({ pic }) {
  return (

    <div className = "w-[45%] md:w-1/5 h-[43vh]  sm:h-[65vh] md:h-[43vh] cursor-pointer"
    style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
    >
      <div className='w-full h-full bg-gray-800 opacity-0 hover:opacity-50 flex justify-center items-center gap-x-5'>

        
            <SocialIcon icon = {<FaTwitter />}/>
            
            <SocialIcon icon = {<FaFacebookF />}/>
          
            <SocialIcon icon = {<FaLinkedinIn />}/>
       
      
      </div>

    </div>
  )
}

export default Card3
