'use client'

import React from 'react';

function SocialIcon({ icon }) {
  return (
    <div className='border border-white rounded-lg p-2 hover:bg-white text-white hover:text-black cursor-pointer'>
        { icon }
    </div>
  )
}

export default SocialIcon
