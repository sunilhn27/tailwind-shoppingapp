import Image from 'next/image'
import React from 'react'
import HeroImg from '@/asserts/images/HeroImg.png'

function HeroSection() {
  return (
    <div className='bg-[#F4F6F5] h-[852px] rounded-lg mx-12 flex pt-8   items-center justify-evenly'>

      <div className='flex flex-col  '>
        <h1 className='w-[474px] h-fit text-[96px] font-extrabold flex flex-col'>
          <span className='bg-white'>LET’S</span>
          EXPLORE
          <span className='bg-yellow-300'>UNIQUE</span>
          CLOTHES.
        </h1>
        <p className='font-sans mt-4'>
          Live for Influential and Innovative fashion!
        </p>
        <button className='bg-black text-white w-[221px] py-5 rounded-md mt-4'>Shop Now</button>

      </div>

      <div className='pt-8'>

        <Image height={0} width={671} src={HeroImg} className="h-[784px] " alt='heroImg'></Image>
      </div>


    </div>
  )
}

export default HeroSection