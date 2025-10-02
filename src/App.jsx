import React from 'react'
import './App.css'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layouts/LayoutOne'
import Checkout from './Pages/Checkout'
import ProductDetails from './Pages/ProductDetails'





const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<LayoutOne/>}>
    <Route path='/Checkout' element={<Checkout/>}/>
    <Route path='/prdc' element={<ProductDetails/>}/>


    </Route>
  ))
  return (
    <>
      <RouterProvider router={myRoute}/> 
    </>
  )
}

export default App
