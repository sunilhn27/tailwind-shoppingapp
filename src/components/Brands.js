import React from 'react'
import BrandLogos from '@/asserts/images/Frame 8.png'
import Image from 'next/image'

function Brands() {
  return (
    <div className='w-full bg-[#EBD96B] h-[186px] mt-4 py-1 flex justify-center items-center'>
      <div className='px-24'>
        <Image src={BrandLogos} className='' />
      </div>
    </div>
  )
}

export default Brands