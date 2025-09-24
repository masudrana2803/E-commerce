import React from 'react'
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";


const RecommendationItem = ({productImage,Description,Category,Rating,Review,DiscountPrice,Price}) => {
  return (
    <>
            <div className='RecommendationCards w-[280px] content-center relative p-0 m-5'>
            <div>
                <img src={productImage} alt="Product27" className=' rounded-2xl w-[309px] h-[347pxpx] bg-[#F8FAFC] '/>
            </div>
            <div className='absolute right-5 top-5'>
                <BiShoppingBag className='hover:bg-black rounded-2xl hover:text-white active:scale-2 text-3xl p-2 '/>
            </div>
            <div  className='flex justify-between mt-2'>
                    <div>
                        <h2 className='font-poppins font-semibold text-[16px] truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[220px] max-h-[80px] '>{Description}</h2>
                        <h2 className='font-poppins font-400 text-[14px] text-2ndary '>{Category}</h2>
                    </div>
                    <div>
                        <h2 className='font-poppins font-600 text-[16px]'>{DiscountPrice}</h2>
                        <h2 className='line-through flex content-center '>{Price}</h2>
                    </div>
            </div>
            </div>
                      <div className='flex gap-2 items-center'>
                          <h3 className='text-yellow-200 m-0 p-0'>{<FaStar/>}</h3>
                          <h3 className=''>{Rating}</h3>
                          <h3>({Review})</h3>
                      </div>
    </>
  )
}

export default RecommendationItem