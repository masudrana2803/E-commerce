import React from 'react'
import './App.css'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layouts/LayoutOne'


const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<LayoutOne/>}>


    </Route>
  ))
  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
