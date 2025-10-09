import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Home from '../Pages/Home'



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
