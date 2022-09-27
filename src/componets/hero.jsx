import React from 'react'


const Hero = () => {
  return (
    <div>
        <div className='bg-[url("https://images.unsplash.com/photo-1651041940745-9f04e2f72a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80")] w-full bg-cover bg-center'>

            <div className='py-20 px-10 grid grid-cols-1 md:grid-cols-5 grid-rows-2  gap-y-80'>
              <div className='flex col-start-3 col-span-2 ml-40 my-6'>
                <h2 className='text-xl text-white'>$33,390</h2>
                <p className=' text-sm pl-4 py-1 text-gray-200'>starting MSRP*</p>

              </div>
              <div className=' flex flex-col col-start-5'>
                <button className='bg-white text-black font-semibold px-4 py-3 my-2'>Build Yours</button>
                <button className='bg-black text-white font-semibold px-4 py-3'>Test Drive</button>
              </div>
              <div className='col-start-1 col-span-2'>
            <h2 className='text-white text-3xl font-normal'>2022 Telluride</h2>
            <h1 className='text-white text-6xl font-medium'>No holding back.</h1>
            <p className='text-white max-w-[420px] font-normal pt-8 pb-2'>The Telluride gives you power for wherever the road takes you. This award-wining vehicle offers impressive handling and power, advance technology, and a spacious interior designed for comfort.</p>
            <p className='text-white underline cursor-pointer'>Disclaimers</p>
              </div>
            <div className='text-white flex col-start-3 text-sm col-span-3 px-8 items-end'>
              <p>Standard SynTex Seating Materials</p>
              <p>Standard Forward Collision-Avoidance Assist FCA and Blind-Spot Tech</p>
              <p>Standard Navigation with 10.25-inch Display</p>
              
              </div>  

            </div>
        </div>
    </div>
  )
}

export default Hero