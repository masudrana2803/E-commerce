import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router';
import Home from '../Pages/Home';
import Cart from './Cart';


const Navbar = () => {
  return (
    <>
      <nav className='py-[27px]'>
        <div className="container">

        <div className='flex justify-between'>
            <div>
            <Link to={'/'}>
        <img src="/src/Images/Nexton_Logo.png" alt="Logo" />
            </Link>
            </div>
            <div className=' w-100 h-13 bg-[#F8F8F8] flex rounded-[100px] items-center p-2 '>
        <CiSearch className='mr-2' />
        <input type="text" placeholder='Search in Products' className='text-center w-full font-normal font-poppins text-[14px] border-none outline-none ' />
            </div>
        <div className='relative'>
            <div className='flex gap-5 text-[32px]'>
        <CiUser />
        <CiShoppingCart />
        </div>

        <div className='absolute top-[-7px] right-[-7px] h-[24px] w-[24px] bg-[#0EA5E9] rounded-[50%] text-center' >3
        </div>
            </div>
        </div>
        </div>
      </nav>
      <Cart/>
      
    </>
  )
}

export default Navbar
