import React from 'react'
import Productitems from '../Tools/Productitems'


const Cart = () => {
  return (
    <>
      <div className='w-[300px] h-[550px] bg-amber-100 absolute top-15 right-0 '>
<h2>Cart</h2>
{/* Products and prices */}
<div className='bg-red-200 py-2 h-[490px] overflow-y-scroll'>

        {/* <div className='flex gap-4 items-center bg-amber-50 my-1'>
        <div className='w-12 h-12 bg-amber-600'>
        <img src="" alt="Image" />
        </div>
        <div className=' '>
        <p className='font-poppins text-[16px] font-medium'>Description</p>
        <p className='font-poppins text-[12px] font-normal'>Price</p>
        </div>
        </div> */}
<Productitems/>


</div>

{/* Total prices */}
<div className='flex justify-between items-center'>
<h2 className='text-2xl font-bold'>Total=</h2>
<h2>1200</h2>
</div>
      </div>
    </>
  )
}

export default Cart
