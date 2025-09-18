import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router';
import Home from '../Pages/Home';


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
            <div className='flex border-2 items-center p-2 '>
        <CiSearch className='mr-2' />
        <input type="text" placeholder='Search in Products' />
            </div>
            <div className='flex'>
        <CiUser />
        <CiShoppingCart />
            </div>
        </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar
