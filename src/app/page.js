import Brands from '@/components/Brands'
import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import NewArrivals from '@/components/NewArrivals'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mb-10'>
      <NavBar />
      <HeroSection />
      <Brands />
      <NewArrivals />
    </div>
  )
}
