import React from 'react';
import { Link } from 'react-router';
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

const RecommendedProducts = ({
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
    <div className="RecommendationCards relative rounded-xl shadow-md p-4 m-2 w-fit bg-white">
      
      {/* Product Image */}
      <div className="relative">
        <img
          src={productImage}
          alt="Product"
          className="rounded-2xl w-65 h-[240px] object-fill bg-[#F8FAFC]"
        />
<div className="absolute right-2 top-2 flex flex-col gap-1">
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

export default RecommendedProducts