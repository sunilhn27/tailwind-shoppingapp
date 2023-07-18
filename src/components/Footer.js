import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialLinks from '@/asserts/images/Frame 18.png'

function Footer() {
  return (
    <div className='w-full h-[400px] bg-black text-white flex '>

      <div className='flex w-[45%] h-full items-center px-16'>
        <div className='flex flex-col space-y-3 '>
          <h1 className='text-3xl font-extrabold'>
            FASHION
          </h1>
          <p className='text-gray-400 w-[300px]'>
            Complete your style with awesome clothes from us.
          </p>
          <div>
            <Image src={SocialLinks} className='mt-4' />
          </div>
        </div>

      </div>

      <div className='grid grid-cols-3 justify-center items-center mb-3 '>

        <div className='space-y-2   flex flex-col px-6 mx-12 '>
          <h1 className='text-xl'>
            Company
          </h1>
          <Link className='text-gray-400' href={"/"}>About</Link>
          <Link className='text-gray-400' href={"/"}>Contact us</Link>
          <Link className='text-gray-400' href={"/"}>Support</Link>
          <Link className='text-gray-400' href={"/"}>Careers</Link>
        </div>
        <div className='flex flex-col space-y-2   mx-12'>
          <h1 className='text-xl'>
            Quick Link
          </h1>
          <Link className='text-gray-400' href={"/"}>Share Location</Link>
          <Link className='text-gray-400' href={"/"}>Orders Tracking</Link>
          <Link className='text-gray-400' href={"/"}>Size Guide</Link>
          <Link className='text-gray-400' href={"/"}>FAQs</Link>
        </div>

        <div className='flex flex-col space-y-2  mb-12 mx-12'>
          <h1 className='text-xl'>
            Legal
          </h1>
          <Link className='text-gray-400' href={"/"}>Terms & conditions</Link>
          <Link className='text-gray-400' href={"/"}>Privacy Policy</Link>
        </div>
      </div>

    </div>
  )
}

export default Footer