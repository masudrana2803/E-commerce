import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { CiCircleMinus,CiCirclePlus } from "react-icons/ci";
import { useParams, useLocation } from 'react-router';
import { addToCart } from '../tools/cartUtils';
import axios from 'axios';
import CommonHead from '../tools/CommonHead';
import starsv from '../Images/Star_vector.png'
import { GiDrippingStar } from "react-icons/gi";
import RecommendationItem from '../tools/RecommendationItem';
import RecommendedProducts from '../tools/RecommendedProducts';
import Recommended from '../tools/Recommended';







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
  const [allProducts, setAllProducts] = useState([]);

  const location = useLocation();
  const selectedCategory = location?.state?.category || null;
  
  // const [data,setData] = useState('')

  // const [images,setImages] = useState(singleProduct.images?.[0])

  // const [singleProduct,setSingleProduct] = useState('')


  const paramsData = useParams()

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${paramsData.id}`)
    .then((res)=>{setSingleProduct(res.data), setImages(res.data.images[0])})
    .catch((err)=>{console.log(err)})
    // also fetch list for recommended component
    axios.get('https://dummyjson.com/products')
      .then(res => setAllProducts(res.data.products))
      .catch(err => console.log(err));
  },[])

console.log(singleProduct)

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
            <img src={item} className='object-fill w-full h-full rounded-2xl' alt="Item" />
            </button>
          
          )
        }
        </div>
        <div className='w-[740px] h-[400px] bg-brdrclr rounded-2xl'>
          {images && (
              <img src={images} alt="Product image" className="w-full h-full fill" />
          )}


        {/* <img src={images} alt="Product image" className='w-full h-full fill ' /> */}
        </div>

        <section id='Product_Details' className='bg-blue-100 px-2 rounded-2xl w-full h-full p-5'>
          <div className='aboslute right-0 top-0 '>
            <div className="PriceReview flex justify-between ">
              <div className='flex'>
              <h1 className='text-yellow-200 pt-1'><FaStar/></h1>
              <h1 className='mr-2'>{singleProduct.rating}</h1>
              <h1 className='underline'>{singleProduct.reviews?.length} Reviews</h1>
              </div>
              <div className='price flex flex-col pl-8'>
              <h1>$ {(singleProduct.price - singleProduct.price * singleProduct.discountPercentage / 100).toFixed(2)}</h1>                <h1 className='line-through'>$ {singleProduct.price}</h1>
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
                <BiShoppingBag />
                <button onClick={() => { addToCart({ id: singleProduct.id, title: singleProduct.title || singleProduct.name, price: singleProduct.price, thumbnail: images }, 1); alert('Added to cart'); }}>Add to Cart</button>
              </div>
            </div>
            <div className="Price_confirmation text-2ndary ">
                <div className="Prqty flex justify-between">
                  <h1>{singleProduct.price} x {quantity}</h1>
                  <h1>{singleProduct.price*quantity}</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Tax estimate</h1>
                  <h1>0</h1>
                </div>
            </div>
            <div className="TotalAmount flex font-bold text-[18px] text-black justify-between">
              <h1>Total</h1>
              <h1>{singleProduct.price*quantity}</h1>
            </div>

          </div>
        </section>
        </div>
      <div className='mb-15'>
      <CommonHead content1={"Black Automatic Watch"}/>
      <CommonHead content3={<p>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
wooden canoes in Valley Park, Missouri ceased in 1978.</p>}/>
      </div>
      <div className='mb-15'>
        <CommonHead content1={"Fabric + Care"}/>
        <CommonHead content3={"Material: Soft wool blend"}/>
        <CommonHead content3={"Color: Various"}/>
      </div>
        <div className='mb-15'>
          <CommonHead content1={"Sale performance"}/>
          <CommonHead content3={"Sales: 0"}/>
          <CommonHead content3={"Review Count: -"}/>
          <CommonHead content3={"Review Average: -"}/>
        </div>
        <div className='mb-24'>
        <CommonHead content1={"Keywords"}/>
        </div>
        <div className='mb-24 flex gap-5'>
          <div className='flex gap-2 p-2 border-2 border-brdrclr w-fit rounded-2xl items-center'>
          <GiDrippingStar/>
          <p>men's fashion</p>
          </div>
          
          <div className='flex gap-2 p-2 border-2 border-brdrclr w-fit rounded-2xl items-center'>
            <GiDrippingStar/>
          <p>winter hat</p>
          </div>
          
          <div className='flex gap-2 p-2 border-2 border-brdrclr w-fit rounded-2xl items-center'>
            <GiDrippingStar/>
          <p>colorful accessory</p>
          </div>
          
          <div className='flex gap-2 p-2 border-2 border-brdrclr w-fit rounded-2xl items-center'>
            <GiDrippingStar/>
          <p>warm headwear</p>
          </div>
        </div>

          <CommonHead content1={"Recommended Products"}/>
            
          <Recommended items={allProducts} category={selectedCategory} />

      
      </div>
    </>
  )
}

export default ProductDetails