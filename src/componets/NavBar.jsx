import React, { useState } from 'react'
import Kia from '../assets/kialogo.png'
import { FaAngleDown, FaTimes, FaGripLines } from 'react-icons/fa'

import Search from './search.jsx'

const NavBar = () => {
  const [nav, setNav] = useState()
  const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[60px] pl-8 flex justify-between items-center bg-[#042339] text-white'>
    <div>
    <img src={Kia} alt="Kia Logo" style={{width: '80px'}} />
    </div>

    {/* top nav menu */}
    <ul className='hidden md:flex w-full ml-6 text-sm'>
        <li className='px-4 cursor-pointer flex items-center hover:underline group'>Vehicles<span className='ml-2 group-hover:rotate-180 duration-300'><FaAngleDown /></span></li>
        <li className='px-4 cursor-pointer flex items-center group hover:underline'>Shopping Assist<span className='ml-2 group-hover:rotate-180 duration-300'><FaAngleDown /></span></li>
        <li className='px-4 cursor-pointer hover:underline'>Inventory</li>
        <li className='px-4 cursor-pointer flex items-center group hover:underline'>Kia Innovation<span className='ml-2 group-hover:rotate-180 duration-300'><FaAngleDown /></span></li>
        <li className='px-4 cursor-pointer hover:underline'>Owners</li>
    </ul>
    <Search />

    <div onClick={handleClick} className='md:hidden z-10 pr-4'>
      {!nav ? <FaGripLines /> : <FaTimes />}

    </div>

    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#042339] flex flex-col justify-start'}>
      <li className='text-[#9e9e9e] mt-20 py-5 pl-7 border-b-2 border-t-2 border-[#9e9e9e6d] flex items-center'>Vehicles<span className='ml-2 '><FaAngleDown /></span></li>
      <li className='text-[#9e9e9e] py-5 pl-7 border-b-2 border-[#9e9e9e6d] flex items-center'>Shopping Assist<span className='ml-2 '><FaAngleDown /></span></li>
      <li className='text-[#9e9e9e] py-5 pl-7 border-b-2 border-[#9e9e9e6d]'>Inventory</li>
      <li className='text-[#9e9e9e] py-5 pl-7 border-b-2 border-[#9e9e9e6d] flex items-center'>Kia Innovation<span className='ml-2 '><FaAngleDown /></span></li>
      <li className='text-[#9e9e9e] py-5 pl-7 border-b-2 border-[#9e9e9e6d]'>Owners</li>
      <div className='flex pt-20 pl-5'>
        <input placeholder='Zip Code'></input>
        <p className='underline pl-10'>Find a Dealer</p>
      </div>


    </ul>





    </div>

  




  )
}

export default NavBar