import React from 'react'
import CommonHead from '../Tools/CommonHead'

const Recommendation = () => {
  return (
    <>
        <div className="conatiner p-22 bg-red-100 ">
        <CommonHead content1={"Recommendations. "} content2={"Best matching products for you"} />
        <div className='flex justify-between flex-wrap  '>
        <div className='RecommendationCards w-[309px] h-[347px] content-center relative'>
            <img src="/src/Images/Product27.png" alt="Product27" />
        <div className='absolute right-5 top-5'>Cart</div>
        </div>

        </div>

        </div>
    </>
  )
}

export default Recommendation