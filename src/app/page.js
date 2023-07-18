
import Banner from '@/components/Banner'
import Brands from '@/components/Brands'
import EmailForm from '@/components/EmailForm'
import Favourite from '@/components/Favourite'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import MobileAd from '@/components/MobileAd'
import NavBar from '@/components/NavBar'
import NewArrivals from '@/components/NewArrivals'

export default function Home() {
  return (
    <div className='mb-10'>
      <NavBar />
      <HeroSection />
      <Brands />
      <NewArrivals />
      <Banner />
      <Favourite />
      <MobileAd />
      <EmailForm />
      <Footer />
    </div>
  )
}
