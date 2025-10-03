import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { CiCircleMinus,CiCirclePlus } from "react-icons/ci";
import Recommendation from '../Components/Recommendation';
import { useParams } from 'react-router';
import axios from 'axios';





const ProductDetails = () => {


  // Quantity selector function

  const [quantity, setQuantity] = useState(0);

  const handleMinus = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };

  const handleAdd = () => {
    setQuantity(prev => prev + 1);
  };


  const [images, setImages] = useState('');
const [singleProduct, setSingleProduct] = useState('');
  
  // const [data,setData] = useState('')

  // const [images,setImages] = useState(singleProduct.images?.[0])

  // const [singleProduct,setSingleProduct] = useState('')


  const paramsData = useParams()

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${paramsData.id}`)
    .then((res)=>{setSingleProduct(res.data), setImages(res.data.images[0])})
    .catch((err)=>{console.log(err)})
  },[])

console.log(singleProduct.price)

  // https://img.freepik.com/premium-photo/close-up-portrait-blue-eyed-ragdoll-cat_1048944-6023660.jpg
  // https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-587527-1643457.jpg&fm=jpg
  // https://static.india.com/wp-content/uploads/2025/01/Persian-Cat-3.png?impolicy=Medium_Widthonly&w=400&h=800
  // https://www.clickbd.com/global/classified/item_img/1278023_0_original.jpg

  return (
    <>
      <div className="container">
        <div className='flex gap-10 m-5 relative'>
        <div className='flex gap-4 flex-col'>
          {
          singleProduct.images?.map((item,i)=>         
            <button
          key={i}
          onClick={()=>setImages(item)} 
          className='items-center bg-brdrclr rounded-2xl active:scale-95 w-[100px] h-[90px]'>
            <img src={item} className='object-fill w-full h-full rounded-2xl' alt="" />
            </button>
          
          )
        }
        </div>
        <div className='w-[740px] h-[400px] bg-brdrclr rounded-2xl'>
        <img src={images} alt="Images" className='w-full h-full fill ' />
        </div>

        <section id='Product_Details' className='bg-blue-100 px-2 rounded-2xl w-full h-full p-5'>
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