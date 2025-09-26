import React, { useEffect, useState } from 'react';
import Productitems from '../Tools/Productitems'
import { Link } from 'react-router'
import axios from 'axios'

const Cart = () => {
  
  {/* Most Important part of API integration */}
    const [Allproducts, setAllproducts] = useState([]);
  
    useEffect(() => {
      axios
        .get('https://dummyjson.com/products')
        .then((res) => setAllproducts(res.data.products))
        .catch((err) => console.log(err));
    }, []);
            console.log(Allproducts)

{/* Most Important part of API integration */}
  return (
    <>
      <div className='w-[340px] bg-blue-50 fixed top-15 right-0 mr-[20px] z-50'>
<h2 className='text-center font-bold'>Cart</h2>
{/* Products and prices */}
<div className='bg-none h-99 py-2 overflow-y-scroll p-4'>

        {/* <div className='flex gap-4 items-center bg-amber-50 my-1'>
        <div className='w-12 h-12 bg-amber-600'>
        <img src="" alt="Image" />
        </div>
        <div className=' '>
        <p className='font-poppins text-[16px] font-medium'>Description</p>
        <p className='font-poppins text-[12px] font-normal'>Price</p>
        </div>
        </div> */}

{/* Most Important part of API integration */}
        {Allproducts.slice(0,10).map((item) => (
            <Productitems
              key={item.id}
              content1={item.thumbnail}
              content2={item.description}
              content3={item.price}
            />
          ))}






</div>

{/* Total prices */}
<div className='flex justify-between items-center px-2'>
<h2 className='text-2xl font-bold'>Total=</h2>
<h2>TK 1200</h2>
</div>

<Link to={'./'}><div className='w-full h-[40px] bg-red-500 py-1 text-center content-center font-bold text-xl rounded-2xl hover:bg-blue-500 active:scale-[1.1]'>
    Check Out
    </div></Link>

      </div>

    </>
  )
}

export default Cart
