import React from 'react'

const DetailsBar = () => {
  return (
    <div className='w-full h-[60px] flex items-center px-4 bg-white text-color-[#042339]'>
        <div className='flex '>
        <h2>2022 Telluride</h2>
        <p>$33,390</p>
        <p>starting MSRP*</p>
        </div>
        
            <ul className='flex w-full justify-end'>
                <li className='cursor:pointer px-4'>Gallery</li>
                <li className='cursor:pointer px-4'>Specs</li>
                <li className='cursor:pointer px-4'>Offers</li>
                <li className='cursor:pointer px-4'>Compare</li>
                <li className='cursor:pointer px-4'>Inventory</li>
                <li className='cursor:pointer px-4'>Shop</li>
                <li className='cursor:pointer ml-4 block h-full bg-[#042339]'>Build</li>
            </ul>
  
    </div>
  )
}

export default DetailsBar