import React from 'react'
import react from '../assets/react.svg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={react} className='w-32' alt="" />
    </div>
  )
}

export default Navbar