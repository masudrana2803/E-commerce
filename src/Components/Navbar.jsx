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


import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import logo from "../Images/Nexton_Logo.png"
import { Link, useNavigate } from 'react-router';
import Cart from './Cart';
import axios from 'axios';


const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cartRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const searchTimeout = useRef(null);

  // Debounced search function
  const debouncedSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
      setSearchResults(response.data.products);
      setShowResults(true);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    }
    setIsLoading(false);
  }, []);

  // Handle input change with debounce
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Clear previous timeout
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    // Set new timeout for search
    searchTimeout.current = setTimeout(() => {
      debouncedSearch(query);
    }, 300); // Wait 300ms after typing stops
  };

  const handleProductClick = (id) => {
    setShowResults(false);
    setSearchQuery('');
    navigate(`/product/${id}`);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, []);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

            <div ref={searchRef} className='relative w-100'>
              <div className='h-13 bg-[#F8F8F8] flex rounded-[100px] items-center p-2'>
                <div className='mr-2'>
                  <CiSearch className={`text-xl ${isLoading ? 'animate-spin text-blue-500' : ''}`} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder='Search in Products'
                  className='text-center w-full font-normal font-poppins text-[14px] border-none outline-none bg-transparent'
                />
              </div>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className='absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto'>
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b'
                    >
                      <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className='w-12 h-12 object-cover rounded'
                      />
                      <div>
                        <h3 className='font-medium text-sm'>{product.title}</h3>
                        <p className='text-sm text-gray-600'>₹{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {showResults && searchResults.length === 0 && (
                <div className='absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50 p-4 text-center text-gray-500'>
                  No products found
                </div>
              )}
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
