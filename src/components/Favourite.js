import Image from 'next/image'
import React from 'react'
import Img1 from '@/asserts/images/Rectangle 49.png'
import Img2 from '@/asserts/images/Rectangle 50.png'

function Favourite() {
  return (
    <div>

      <div>
        <h1 className='text-3xl font-extrabold m-4 p-6'>Young's Favourite</h1>
      </div>

      <div className='flex justify-evenly '>
        <div>
          <Image src={Img1} height={500} width={650} className='mx-2 shadow-2xl'/>
          <h1 className='text-xl font-bold mt-3'>
            Trending on instagram
          </h1>
          <p className='text-gray-400'>
            Explore Now!
          </p>
        </div>
        <div className=''>
          <Image src={Img2} height={500} width={650}  className='mx-2 shadow-2xl' />
          <h1 className='text-xl font-bold mt-3'>
            All Under $40
          </h1>
          <p className='text-gray-400'>
            Explore Now!
          </p>
        </div>

      </div>

    </div>
  )
}

export default Favourite