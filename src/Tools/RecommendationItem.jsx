// import React from 'react'
// import { BiShoppingBag } from "react-icons/bi";
// import { FaStar } from "react-icons/fa";


// const RecommendationItem = ({productImage,Description,Category,Rating,Review,DiscountPrice,Price}) => {
//   return (
//     <>
//             <div className='RecommendationCards w-[280px] content-center relative p-0 m-5'>
//             <div>
//                 <img src={productImage} alt="Product27" className=' rounded-2xl w-[309px] h-[347pxpx] bg-[#F8FAFC] '/>
//             </div>
//             <div className='absolute right-1 top-1'>
//                 <BiShoppingBag className='hover:bg-black rounded-2xl bg-white hover:text-white active:scale-2 text-3xl p-2 '/>
//             </div>
//             <div  className='flex justify-between mt-2'>
//                     <div>
//                         <h2 className='font-poppins font-semibold text-[16px] truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[220px] max-h-[80px] '>{Description}</h2>
//                         <h2 className='font-poppins font-400 text-[14px] text-2ndary '>{Category}</h2>
//                     </div>
//                     <div>
//                         <h2 className='font-poppins font-600 text-[16px]'>{DiscountPrice}</h2>
//                         <h2 className='line-through flex content-center '>{Price}</h2>
//                     </div>
//             </div>
//             </div>
//                       <div className='flex gap-2 items-center'>
//                           <h3 className='text-yellow-200 m-0 p-0'>{<FaStar/>}</h3>
//                           <h3 className=''>{Rating}</h3>
//                           <h3>({Review})</h3>
//                       </div>
//     </>
//   )
// }

// export default RecommendationItem

import React from 'react';
import { Link } from 'react-router';
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";



const RecommendationItem = ({
  productImage,
  Description,
  Category,
  Rating,
  Review,
  DiscountPrice,
  Price,
  DetailsClick
}) => {
  return (
    <div className="RecommendationCards relative bg-white rounded-xl shadow-md p-4 m-2 ">
      
      {/* Product Image */}
      <div className="relative">
        <img
          src={productImage}
          alt="Product"
          className="rounded-2xl w-[340px] h-[240px] object-fill bg-[#F8FAFC]"
        />
<div className="absolute right-0 top-0 flex flex-col gap-1">
        <BiShoppingBag className="bg-white/30 backdrop-blur-md border border-white/40 rounded-full text-[32px] p-2 hover:bg-black hover:text-white transition duration-300 active:scale-95 active:bg-amber-500" />
        <button onClick={DetailsClick} to={'/'}>
        <TbListDetails className="bg-white/30 backdrop-blur-md border border-white/40 rounded-full text-[32px] p-2 hover:bg-black hover:text-white transition duration-300 active:scale-95 active:bg-amber-500" />
        </button>
</div>

      </div>

      {/* Product Info */}
      <div className="mt-4 flex flex-col gap-1">
        <h2 className="font-poppins font-semibold text-[16px] truncate">{Description}</h2>
        <h2 className="font-poppins text-[14px] text-gray-500">{Category}</h2>
      </div>

      {/* Price Info */}
      <div className="mt-2 flex justify-between items-center">
        <div className="text-[16px] font-semibold text-green-600">{DiscountPrice}</div>
        <div className="line-through text-gray-400 text-[14px]">{Price}</div>
      </div>

      {/* Rating */}
      <div className="mt-2 flex gap-2 items-center text-sm">
        <FaStar className="text-yellow-400" />
        <span>{Rating}</span>
        <span className="text-gray-500">({Review})</span>
      </div>
    </div>
  );
};

export default RecommendationItem;