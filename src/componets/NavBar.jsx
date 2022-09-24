import React from 'react'
import Kia from '../assets/kialogo.png'
import { FaAngleDown } from 'react-icons/fa'
import Search from './search.jsx'

const NavBar = () => {


  return (
    <div className='fixed w-full h-[60px] pl-8 flex justify-between items-center bg-[#042339] text-white'>
    <div>
    <img src={Kia} alt="Kia Logo" style={{width: '80px'}} />
    </div>

    {/* top nav menu */}
    <ul className='flex w-full ml-6'>
        <li className='px-4 cursor-pointer flex items-center hover:underline group'>Vehicles<span className='ml-2 group-hover:rotate-180 duration-300'><FaAngleDown /></span></li>
        <li className='px-4 cursor-pointer flex items-center group hover:underline'>Shopping Assist<span className='ml-2 group-hover:rotate-180 duration-300'><FaAngleDown /></span></li>
        <li className='px-4 cursor-pointer hover:underline'>Inventory</li>
        <li className='px-4 cursor-pointer flex items-center group hover:underline'>Kia Innovation<span className='ml-2 group-hover:rotate-180 duration-300'><FaAngleDown /></span></li>
        <li className='px-4 cursor-pointer hover:underline'>Owners</li>
    </ul>
    <Search />
    </div>
  )
}

export default NavBar