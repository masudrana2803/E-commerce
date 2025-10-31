import React from 'react'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layouts/LayoutOne'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import AllProducts from './pages/AllProducts'


// soefoefn


// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const App = () => {
  
  const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LayoutOne />}>
    <Route index element={<Home />} />
    <Route path='Checkout' element={<Checkout />} />
    <Route path='ProductDetails/:id' element={<ProductDetails />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path='/AllProducts' element={<AllProducts/>} />

  </Route>
))

  // const myRoute = createBrowserRouter(createRoutesFromElements(
  //   <Route path='/' element = {<LayoutOne/>}>
  //   <Route path='/Checkout' element={<Checkout/>}/>
  //   <Route path='/prdc' element={<ProductDetails/>}/>


  //   </Route>
  // ))
  return (
    <>
      <RouterProvider router={myRoute}/> 
    </>
  )
}

export default App
