import React from 'react'
import Hero from '../components/Hero'
import BrandInfo from '../components/BrandInfo'
import Collections from '../components/Collection'
import Recommendation from '../components/Recommendation'
import BannerContainer from '../components/BannerContainer'
import Footer from '../components/Footer'
import FooterEnd from '../components/FooterEnd'
import BestSellers from '../components/BestSellers'


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
