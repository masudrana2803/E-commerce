import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Home from '../Pages/Home'
import Collections from '../Components/Collections'
import ResponsiveNavBar from '../Components/ResponsiveNavBar'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResponsiveNavBar/>
    <Home/>
    <Outlet/>
    </>
  )
}

export default LayoutOne
