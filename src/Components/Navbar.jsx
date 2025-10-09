// import React, { useState } from 'react'
// import { CiSearch } from "react-icons/ci";
// import { CiShoppingCart } from "react-icons/ci";
// import { CiUser } from "react-icons/ci";
// import { Link } from 'react-router';
// import Cart from './Cart';



// const Navbar = () => {
  
//   const [showCart,setShowcart]  = useState(false)

//   return (
//     <>
//       <nav className='py-[27px]'>
//         <div className="container">

//         <div className='flex justify-between'>
//             <div>
//             <a href="./">
//         <img src="/src/Images/Nexton_Logo.png" alt="Logo" />
//             </a>

//             </div>
//             <div className=' w-100 h-13 bg-[#F8F8F8] flex rounded-[100px] items-center p-2 '>
//         <CiSearch className='mr-2' />
//         <input type="text" placeholder='Search in Products' className='text-center w-full font-normal font-poppins text-[14px] border-none outline-none ' />
//             </div>
//         <div className='relative'>
//             <div className='flex gap-5 text-[32px]'>
//         <CiUser/>
//         <button onClick={()=>setShowcart(true)}>
//         <CiShoppingCart/>
//         </button>
//         </div>

//         <div className='absolute top-[-7px] right-[-7px] h-[24px] w-[24px] bg-[#0EA5E9] rounded-[50%] text-center' >3
//         </div>
//             </div>
//         </div>
//         </div>
//         {
//           showCart&&
//         <Cart/>

//         }
//       </nav>

//     </>
//   )
// }

// export default Navbar


import React, { useState, useRef, useEffect } from 'react';
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import logo from "../Images/Nexton_Logo.png"
import { Link } from 'react-router';
import Cart from './Cart';


const Navbar = () => {
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
      <nav className='py-[27px] hidden md:block'>
        <div className="container">
          <div className='flex justify-between'>
            <div>
              <Link to={'/'}>
                <img src={logo} alt="Logo" />
              </Link>
              {/* <a href="./">
              </a> */}
            </div>

            <div className='w-100 h-13 bg-[#F8F8F8] flex rounded-[100px] items-center p-2'>
              <CiSearch className='mr-2' />
              <input
                type="text"
                placeholder='Search in Products'
                className='text-center w-full font-normal font-poppins text-[14px] border-none outline-none'
              />
            </div>

            <div className='relative'>
              <div className='flex gap-5 text-[32px]'>
                <CiUser />
                <button onClick={() => setShowCart(true)}>
                  <CiShoppingCart />
                </button>
              </div>
              <div className='absolute top-[-7px] right-[-7px] h-[24px] w-[24px] bg-[#0EA5E9] rounded-[50%] text-center'>
                0
              </div>
            </div>
          </div>
        </div>

        {showCart && (
          <div ref={cartRef}>
            <Cart />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
