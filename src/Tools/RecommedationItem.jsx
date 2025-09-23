import React from 'react'
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";


const RecommedationItem = ({content1,content2,content3,content4,content5,content6,content7,content8}) => {
  return (
    <>
            <div className='RecommendationCards w-[309px] h-[448px] content-center relative'>
            <div>
                <img src={content1} alt="Product27" className=' rounded-2xl '/>
            </div>
            <div className='absolute right-5 top-5'>
                <BiShoppingBag className='hover:bg-black rounded-2xl hover:text-white active:scale-2 text-3xl p-2 '/>
            </div>
            <div  className='flex justify-between pb-16.5 mt-2'>
                    <div>
                        <h2 className='font-poppins font-600 text-[16px] '>{content2}</h2>
                        <h2 className='font-poppins font-400 text-[14px] text-2ndary '>{content3}</h2>
                        <div className='flex gap-1 justify-between items-center'>
                        <h3 className='text-yellow-200'>{<FaStar/>}</h3>
                        <h3>{content4}</h3>
                        <h3>{content5}</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-poppins font-600 text-[16px]'>{content6}</h2>
                        <h2 className='line-through flex content-center '>{content7}</h2>
                    </div>
            </div>
            </div>
    </>
  )
}

export default RecommedationItem