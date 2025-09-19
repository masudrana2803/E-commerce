import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Home from '../Pages/Home'
import Cart from '../Components/Cart'

const LayoutOne = () => {
  return (
    <>
<Navbar/>
<Home/>
<Outlet/>
    </>
  )
}

export default LayoutOne
