import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { CiCircleMinus,CiCirclePlus } from "react-icons/ci";
import Recommendation from '../Components/Recommendation';





const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);

  const handleMinus = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };

  const handleAdd = () => {
    setQuantity(prev => prev + 1);
  };

  
  const [data,setData] = useState('https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg')

  // https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg
  // https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-587527-1643457.jpg&fm=jpg
  // https://static.india.com/wp-content/uploads/2025/01/Persian-Cat-3.png?impolicy=Medium_Widthonly&w=400&h=800
  // https://www.clickbd.com/global/classified/item_img/1278023_0_original.jpg

  return (
    <>
      <div className="container">
        <div className='flex gap-10 m-5 relative'>
        <div className='flex gap-4 flex-col'>
        <button onClick={()=>setData('https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg')} className='items-center bg-red-200 rounded-2xl active:scale-95 w-[100px] h-[90px]'><img src='https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg' className='object-fill w-full h-full rounded-2xl' alt="" /></button>
        <button onClick={()=>setData('https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-587527-1643457.jpg&fm=jpg')} className='items-center bg-red-200 rounded-2xl active:scale-95 w-[100px] h-[90px]'><img src='https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-587527-1643457.jpg&fm=jpg' className='object-fill w-full h-full rounded-2xl' alt="" /></button>
        <button onClick={()=>setData('https://static.india.com/wp-content/uploads/2025/01/Persian-Cat-3.png?impolicy=Medium_Widthonly&w=400&h=800')} className='items-center bg-red-200 rounded-2xl active:scale-95 w-[90px] h-[90px]'><img src='https://static.india.com/wp-content/uploads/2025/01/Persian-Cat-3.png?impolicy=Medium_Widthonly&w=400&h=800' className='object-fill w-full h-full rounded-2xl' alt="" /></button>
        <button onClick={()=>setData('https://www.clickbd.com/global/classified/item_img/1278023_0_original.jpg')} className='items-center bg-red-200 rounded-2xl active:scale-95 w-[100px] h-[100px]'><img src='https://www.clickbd.com/global/classified/item_img/1278023_0_original.jpg' className='object-fill w-full h-full rounded-2xl' alt="" /></button>
        </div>
        <div className='-5'>
        <h1 className=' w-[400px] h-[400px] '><img src={data} alt="" className='w-full h-full object-fill rounded-xl' /></h1>
        </div>

        <section id='Poduct_Details' className='bg-blue-100 px-2 rounded-2xl w-full h-full p-5'>
          <div className='aboslute right-0 top-0 '>
            <div className="PriceReview flex justify-between ">
              <div className='flex'>
              <h1 className='text-yellow-200 pt-1'><FaStar/></h1>
              <h1 className='mr-2'>4.9.</h1>
              <h1 className='underline'>142 Reviews</h1>
              </div>
              <div className='price flex flex-col pl-8'>
                <h1>$169.99</h1>
                <h1 className='line-through'>$199.99</h1>
              </div>
            </div>
            <div className="sizes">
                <h1>Size:S</h1>
                <div className='flex flex-row gap-2'>
                  <button className='text-center hover:bg-[#0EA5E9] bg-white rounded-xl w-15 py-2 active:scale-95'>S</button>
                  <button className='text-center hover:bg-[#0EA5E9] bg-white rounded-xl w-15 py-2 active:scale-95'>M</button>
                  <button className='text-center hover:bg-[#0EA5E9] bg-white rounded-xl w-15 py-2 active:scale-95'>L</button>
                  <button className='text-center hover:bg-[#0EA5E9] bg-white rounded-xl w-15 py-2 active:scale-95'>XL</button>
                  <button className='text-center hover:bg-[#0EA5E9] bg-white rounded-xl w-15 py-2 active:scale-95'>2XL</button>
                </div>
            </div>
            <div className="cart_qty flex justify-between my-10">
              <div className='qty bg-[#F8F8F8] px-3 rounded-2xl flex gap-4 items-center '>
                <button onClick={handleMinus}><CiCircleMinus/></button>
                <h1 className='font-bold text-[24px]'>{quantity}</h1>
                <button onClick={handleAdd}><CiCirclePlus/></button>
              </div>
              <div className='cart bg-black text-white rounded-2xl flex gap-2 items-center px-4 py-2 hover:bg-white hover:text-black '>
                <BiShoppingBag/>
                <button>Add to Cart</button>
              </div>
            </div>
            <div className="Price_confirmation text-2ndary ">
                <div className="Prqty flex justify-between">
                  <h1>$169.99 x 1</h1>
                  <h1>$169.99</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Tax estimate</h1>
                  <h1>0</h1>
                </div>
            </div>
            <div className="TotalAmount flex font-bold text-[18px] text-black justify-between">
              <h1>Total</h1>
              <h1>$169.99</h1>
            </div>

          </div>
        </section>
        </div>



      </div>
      <Recommendation/>
    </>
  )
}

export default ProductDetails