import React from 'react'
import './App.css'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layouts/LayoutOne'
import Checkout from './Pages/Checkout'
import ProductDetails from './Pages/ProductDetails'




// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const App = () => {
  
  const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LayoutOne />}>
    <Route index element={<Home />} />
    <Route path='Checkout' element={<Checkout />} />
    <Route path='Product-details' element={<ProductDetails />} />
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
