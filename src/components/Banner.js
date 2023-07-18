
import React from 'react'
import Img from '@/asserts/images/image 12.png'
import Image from 'next/image'

function Banner() {
  return (
    <div className='w-full h-[700px] bg-[#efcd35]  my-24'>

      <div className='flex'>

        <div className='flex-1 mx-auto '>
          <Image src={Img} height={700} width={710} ></Image>
        </div>


        <div className='flex-1 my-auto'>

          <div className='flex flex-col justify-center items-start '>
            <h1 className='w-[400px]  text-7xl font-extrabold mb-10 flex flex-col'>
              <span className='bg-white'>PAYDAY</span>
              SALE NOW
            </h1>
            <h3 className='font-sans text-3xl w-[600px] h-[90px] mb-1'>
              Spend minimal $100 get 30% off
              voucher code for your next purchase
            </h3>
            <h3 className='font-extrabold mb-1'>
              1 June - 10 June 2021
            </h3>
            <h3 className='font-normal mb-8'>
              *Terms & Conditions apply
            </h3>
            <button className='bg-black text-white px-8 py-4'>
              SHOW NOW
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner