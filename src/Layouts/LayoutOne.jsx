import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Home from '../Pages/Home'
import Collections from '../components/Collection'
import ResponsiveNavBar from '../Components/ResponsiveNavBar'
import Footer from '../components/Footer'
import FooterEnd from '../components/FooterEnd'

// const LayoutOne = () => {
//   return (
//     <>
//     <Navbar/>
//     <ResponsiveNavBar/>
//     <Home/>
//     <Outlet/>
//     </>
//   )
// }

const LayoutOne = () => {
  return (
    <div>
      <Navbar/>
      <ResponsiveNavBar/>
      <Outlet />
      <Footer/>
      <FooterEnd/>
    </div>
  )
}

export default LayoutOne
