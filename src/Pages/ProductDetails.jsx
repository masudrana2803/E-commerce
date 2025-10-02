import React, { useState } from 'react'




const ProductDetails = () => {
  
  const [data,setData] = useState('https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg')

  // https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg
  // https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-587527-1643457.jpg&fm=jpg
  // https://static.india.com/wp-content/uploads/2025/01/Persian-Cat-3.png?impolicy=Medium_Widthonly&w=400&h=800
  // https://www.clickbd.com/global/classified/item_img/1278023_0_original.jpg

  return (
    <>
      <div className="container">
        <div className='flex gap-10 m-5'>
        <div className='flex gap-4 flex-col'>
        <button onClick={()=>setData('https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg')} className='items-center bg-red-200 rounded-2xl active:scale-95 w-[100px] h-[90px]'><img src='https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg' className='object-fill w-full h-full rounded-2xl' alt="" /></button>
        <button onClick={()=>setData('https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-587527-1643457.jpg&fm=jpg')} className='items-center bg-red-200 rounded-2xl active:scale-95 w-[100px] h-[90px]'><img src='https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-587527-1643457.jpg&fm=jpg' className='object-fill w-full h-full rounded-2xl' alt="" /></button>
        <button onClick={()=>setData('https://static.india.com/wp-content/uploads/2025/01/Persian-Cat-3.png?impolicy=Medium_Widthonly&w=400&h=800')} className='items-center bg-red-200 rounded-2xl active:scale-95 w-[90px] h-[90px]'><img src='https://static.india.com/wp-content/uploads/2025/01/Persian-Cat-3.png?impolicy=Medium_Widthonly&w=400&h=800' className='object-fill w-full h-full rounded-2xl' alt="" /></button>
        <button onClick={()=>setData('https://www.clickbd.com/global/classified/item_img/1278023_0_original.jpg')} className='items-center bg-red-200 rounded-2xl active:scale-95 w-[100px] h-[100px]'><img src='https://www.clickbd.com/global/classified/item_img/1278023_0_original.jpg' className='object-fill w-full h-full rounded-2xl' alt="" /></button>
        </div>
        <div className='-5'>
        <h1 className=' w-[500px] h-[500px] '><img src={data} alt="" className='w-full h-full object-fill rounded-xl' /></h1>
        </div>
        <div className='w-[460px] rounded-2xl border border-brdrclr roounded-xl'>
          product details
        </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails