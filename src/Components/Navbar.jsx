import React, { useState, useRef, useEffect } from 'react';
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import logo from "../Images/Nexton_Logo.png";
import { Link } from 'react-router';
import Cart from './Cart';
import SearchResults from '../Tools/SearchResults';

const Navbar = () => {
  // State to toggle cart visibility
  const [showCart, setShowCart] = useState(false);
  // State to hold search input
  const [searchQuery, setSearchQuery] = useState('');
  // State to toggle search results visibility
  const [showResults, setShowResults] = useState(true);
  // Refs to detect outside clicks
  const cartRef = useRef(null);
  const searchRef = useRef(null);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Close search results and clear input
  const handleCloseResults = () => {
    setShowResults(false);
    setSearchQuery('');
  };

  // Close search results when clicking outside
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
      {/* Navbar container, hidden on small screens */}
      <nav className='py-[27px] hidden md:block'>
        <div className="container">
          <div className='flex justify-between'>
            {/* Logo section */}
            <div>
              <Link to={'/'}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>

            {/* Search bar with results */}
            <div ref={searchRef} className='relative w-100'>
              <div className='h-13 bg-[#F8F8F8] flex rounded-[100px] items-center p-2'>
                <div className='mr-2'>
                  <CiSearch className="text-xl" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowResults(true)}
                  placeholder='Search in Products'
                  className='text-center w-full font-normal font-poppins text-[14px] border-none outline-none bg-transparent'
                />
              </div>

              {/* Conditional rendering of search results */}
              {showResults && (
                <SearchResults
                  query={searchQuery}
                  onProductClick={handleCloseResults}
                />
              )}
            </div>

            {/* User and cart icons */}
            <div className='relative'>
              <div className='flex gap-5 text-[32px]'>
                <CiUser />
                <button onClick={() => setShowCart(true)}>
                  <CiShoppingCart />
                </button>
              </div>
              {/* Cart item count badge (static for now) */}
              <div className='absolute top-[-7px] right-[-7px] h-[24px] w-[24px] bg-[#0EA5E9] rounded-[50%] text-center'>
                0
              </div>
            </div>
          </div>
        </div>

        {/* Conditional rendering of cart */}
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