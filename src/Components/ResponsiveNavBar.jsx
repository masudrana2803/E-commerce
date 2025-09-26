import React, { useState } from 'react'
import logo from '../Images/Favicon.png'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";



const ResponsiveNavBar = () => {
    
    const [ShowNav,setShowNav] = useState(false)

  return (
    <>
        <section className=''>

            <div className="container">
            <div className='flex justify-between pt-4 pb-2 md:hidden'>
                <img src={logo} alt="logo" className='active:scale-1 duration-500' />
                <div className='flex gap-2 items-center'>
                <button className='active:scale-2'><CiSearch/></button>
                <form> <input className='inline-block outline-0' type="text" placeholder='Search in products...' /> </form>
                </div>
                <div className='relative '>
                <button onClick={()=>setShowNav(!ShowNav)}>
                <IoMenuOutline/>
                </button>

                </div>
            </div>
            {
            ShowNav&&
            <div className='sticky'>
                <button><CiUser/></button>
                <button><CiShoppingCart/></button>
            </div>
            }
            <div>

            </div>
            </div>
        </section>
{/*
  Always render the nav container and animate its visibility.
  Use Tailwind's transition classes for smoothness.

below code is from AI

<div className='bg-red-300 sticky top-10 right-10 z-10'>
  <div
    className={`transition-all duration-1000 ease-in-out overflow-hidden ${
      ShowNav ? 'max-h-20 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
    }`}
  >
    <div className='flex justify-center gap-5 py-1'>
      <button><CiUser /></button>
      <button><CiShoppingCart /></button>
    </div>
  </div>
</div>

*/}


    </>
  )
}

export default ResponsiveNavBar