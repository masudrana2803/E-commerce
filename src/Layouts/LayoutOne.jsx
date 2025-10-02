import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Home from '../Pages/Home'
import Collections from '../Components/Collections'
import ResponsiveNavBar from '../Components/ResponsiveNavBar'
import Footer from '../Components/Footer'
import FooterEnd from '../Components/FooterEnd'

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
      <Outlet />
      <Footer/>
      <FooterEnd/>
    </div>
  )
}

export default LayoutOne
