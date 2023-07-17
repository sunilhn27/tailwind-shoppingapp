import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/asserts/images/FashionLogo.png'

function NavBar() {
  return (
    <div>

      <nav className='flex justify-between items-center font-sans m-12'>
        <div className='flex gap-2'>
          <Image src={Logo} height={29} width={32}></Image>
          <h1 className='text-4xl font-extrabold'>FASHION</h1>
        </div>
        <div className='flex gap-8 items-center'>
          <Link href={"/"}>CATALOGUE</Link>
          <Link href={"/"}>FASHION</Link>
          <Link href={"/"}>FAVOURITE</Link>
          <Link href={"/"}>LIFESTYLE</Link>
          <button className='bg-black text-white w-[134px] h-[54px]'>SIGN UP</button>
        </div>
      </nav>

    </div>
  )
}

export default NavBar