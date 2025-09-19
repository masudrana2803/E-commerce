import React from 'react'
import Productitems from '../Tools/Productitems'
import { Link } from 'react-router'


const Cart = () => {
  return (
    <>
      <div className='w-[340px] h-[550px] bg-amber-100 absolute top-15 right-0 mr-[20px] z-50'>
<h2 className='text-center font-bold'>Cart</h2>
{/* Products and prices */}
<div className='bg-none py-2 h-[450px] overflow-y-scroll p-4'>

        {/* <div className='flex gap-4 items-center bg-amber-50 my-1'>
        <div className='w-12 h-12 bg-amber-600'>
        <img src="" alt="Image" />
        </div>
        <div className=' '>
        <p className='font-poppins text-[16px] font-medium'>Description</p>
        <p className='font-poppins text-[12px] font-normal'>Price</p>
        </div>
        </div> */}
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>
<Productitems content1={""} content2={"Description"} content3={"Price"}/>




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
