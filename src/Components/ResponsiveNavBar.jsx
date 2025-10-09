import React, { useState, useRef,useEffect } from 'react'
import logo from '../Images/Favicon.png'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import Cart from './Cart';



const ResponsiveNavBar = () => {
    
    const [ShowNav,setShowNav] = useState(false)

    const [showCart, setShowCart] = useState(false);
    const cartRef = useRef(null);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    if (showCart) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCart]);


  return (
    <>
        <section className=''>

            <div className="container">
            <div className='flex justify-between py-5 md:hidden'>
                <img src={logo} alt="logo" className='active:scale-1 duration-500' />
                <div className='flex gap-2 items-center'>
                <button className='active:scale-2'><CiSearch/></button>
                <form> <input className='inline-block outline-0' type="text" placeholder='Search in products...' /> </form>
                </div>
                <div className='relative '>
                <button className='duration-1000 ease-in-out' onClick={()=>setShowNav(!ShowNav)}>
                <IoMenuOutline/>
                </button>

                </div>
            </div>
            {
            ShowNav&&
            <div className='absolute flex gap-5 text-[14px] top-10 right-0 bg-blue-50 rounded-2xl px-8 w-[100%] justify-end mt-1.5 transition-transform duration-700 '>
                <button className='font-extrabold'><CiUser/></button>
                                <button onClick={() => setShowCart(true)}>
                                  <CiShoppingCart />
                                </button>
            </div>
            }
            <div>

            </div>
            </div>
                    {showCart && (
          <div ref={cartRef}>
            <Cart/>
          </div>
        )}
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