import React from 'react'
import { BsSearch } from 'react-icons/bs'

const search = () => {
  return (
    <div className='float-right block h-full bg-[#323a43] cursor-text'>
        <div className='flex justify-center items-center px-10 py-4'><span className='pr-4'><BsSearch /></span>Search</div>
    </div>
  )
}

export default search