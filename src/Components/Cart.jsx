import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
// Utility functions to manage cart state
import { getCart, removeFromCart, updateQuantity } from '../tools/cartUtils';

const Cart = () => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Load cart items when component mounts
  useEffect(() => {
    setCartItems(getCart()); // Fetch cart from local storage or context
  }, []);

  // Remove item from cart and update state
  const handleRemove = (id) => {
    const next = removeFromCart(id); // Remove item by ID
    setCartItems(next); // Update cart state
  };

  // Update item quantity based on delta (+1 or -1)
  const handleQtyChange = (id, delta) => {
    const item = cartItems.find((c) => c.id === id); // Find item by ID
    if (!item) return;
    const nextQty = (item.quantity || 1) + delta; // Calculate new quantity
    if (nextQty < 1) return; // Prevent quantity below 1
    const next = updateQuantity(id, nextQty); // Update quantity
    setCartItems(next); // Update cart state
  };

  // Calculate total price of all items
  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    // Cart container with fixed position on the right
    <div className='w-[340px] bg-blue-50 fixed top-15 right-0 mr-[20px] z-50'>
      <h2 className='text-center font-bold'>Cart</h2>

      {/* Cart items list */}
      <div className='bg-none h-99 py-2 overflow-y-scroll p-4'>
        {cartItems.map((item) => (
          <div key={item.id} className='flex gap-4 items-center bg-amber-50 my-1 p-2 rounded'>
            {/* Product thumbnail */}
            <div className='w-12 h-12 overflow-hidden rounded'>
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
            </div>

            {/* Product details and controls */}
            <div className='flex-1'>
              <p className='font-poppins text-[16px] font-medium'>{item.title}</p>
              <p className='font-poppins text-[14px] font-normal'>₹{item.price}</p>

              {/* Quantity controls and remove button */}
              <div className='flex items-center gap-2 mt-1'>
                <button
                  onClick={() => handleQtyChange(item.id, -1)}
                  disabled={item.quantity <= 1}
                  className='px-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50'
                >-</button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQtyChange(item.id, 1)}
                  className='px-2 bg-gray-200 rounded hover:bg-gray-300'
                >+</button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className='ml-auto text-red-500 hover:text-red-700'
                >Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total price display */}
      <div className='flex justify-between items-center px-2'>
        <h2 className='text-2xl font-bold'>Total</h2>
        <h2>₹{total.toFixed(2)}</h2>
      </div>

      {/* Checkout button */}
      <Link to={'/checkout'}>
        <div className='w-full h-[40px] bg-gray-500 py-1 text-center content-center font-bold text-xl rounded-2xl hover:bg-blue-500 active:scale-[1.1]'>
          Check Out
        </div>
      </Link>
    </div>
  );
};

export default Cart;