import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <img src={logo} className='w-8' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to ='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-teal-900 hidden'/>
          </NavLink>
          <NavLink to ='/' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-teal-900 hidden'/>
          </NavLink>
          <NavLink to ='/' className='flex flex-col items-center gap-1'>
            <p>Services</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-teal-900 hidden'/>
          </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
          <img src={logo} alt="logo" className='w-5 cursor-pointer'/>

          <div className='group relative'>
            <img src={logo} alt="" className='w-5 cursor-pointer' />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>Our Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>

          <Link to='/cart' className='relative'></Link>
        </div>
    </div>
  )
}

export default Navbar