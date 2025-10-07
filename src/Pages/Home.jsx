import React from 'react'
import Hero from '../Components/Hero'
import BrandInfo from '../Components/BrandInfo'
import Collections from '../Components/Collections'
import Recommendation from '../Components/Recommendation'
import BannerContainer from '../Components/BannerContainer'
import Footer from '../Components/Footer'
import FooterEnd from '../Components/FooterEnd'
import BestSellers from '../Components/BestSellers'


const Home = () => {
  return (
    <>
    <Hero/>
    <BrandInfo/>
    <Collections/>
    <Recommendation/>
    <BestSellers/>
    <BannerContainer/>
    </>
  )
}

export default Home
