import React from 'react'
import HeroPage from './HeroPage'
import BestSeller from './BestSeller.jsx'
import Fruits from './Fruits.jsx'
import Dairy from './Dairy.jsx'
import Dishes from './Dishes.jsx'
import AllCategory from './AllCategory.jsx'
import DiscountBar from './DiscountBar.jsx'
import Footer from '../Footer/Footer.jsx'

function Home() {
  return (
    <>
    <div className='w-full px-10  mt-8'>

      <HeroPage/>
      <BestSeller/>
      <DiscountBar/>
      <Fruits/>
      <DiscountBar/>
      <Dairy/>
      <Dishes/>
      <AllCategory/>
      <Footer/>

    </div>
    
    </>
  )
}

export default Home