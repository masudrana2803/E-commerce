import React from 'react'
import { BiShoppingBag } from "react-icons/bi";


const RecommedationItem = ({content1,content2,content3,content4,content5,content6,content7,conent8}) => {
  return (
    <>
            <div className='RecommendationCards w-[309px] h-[448px] content-center relative'>
            <div>
                <img src={content1} alt="Product27" className=' rounded-2xl '/>
            </div>
            <div className='absolute right-5 top-5'>
                <BiShoppingBag/>
            </div>
            <div  className='flex justify-between pb-16.5 '>
                    <div>
                        <h2>Description</h2>
                        <h2>Accessories</h2>
                        <div className='flex gap-1 justify-between'>
                        <h3>Star</h3>
                        <h3>rating</h3>
                        <h3>Review</h3>
                        </div>
                    </div>
                    <div>
                        <h2>Discounted Price</h2>
                        <h2>Price</h2>
                    </div>
            </div>
            </div>
    </>
  )
}

export default RecommedationItem