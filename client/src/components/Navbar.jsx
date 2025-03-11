import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={logo} className='w-32' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className=''/>
          </NavLink>
        </ul>
    </div>
  )
}

export default Navbar