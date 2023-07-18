import React from 'react'
import MobileImg from '@/asserts/images/Mobile app.png'
import MobileImg2 from '@/asserts/images/frame 37.png'
import Image from 'next/image'


function MobileAd() {
  return (
    <div className='my-4 flex py-12 justify-evenly'>

      <div className='flex flex-col my-auto'>
        <h1 className='w-[500px] text-5xl font-extrabold'>
          DOWNLOAD APP &
          GET THE VOUCHER!
        </h1>
        <p className='w-[350px] text-1xl text-gray-500 my-6'>
          Get 30% off for first transaction using
          Rondovision mobile app for now.
        </p>
        <div>
          <Image src={MobileImg2}></Image>
        </div>

      </div>

      <div>
        <Image src={MobileImg}></Image>
      </div>

    </div>
  )
}

export default MobileAd