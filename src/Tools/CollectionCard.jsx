// import React from 'react'
// import { IoIosArrowRoundForward } from "react-icons/io";


// const CollectionCard = ({content1,content2}) => {
//   return (
//     <>
//       <div className=' h-[132px] flex items-center justify-center gap-28 mr-3 border-red-100 border-1 border-solid rounded-2xl '>
//         <div>
//             <h2 className='text-[24px] font-poppins text-primary font-600 '>{content1}</h2>
//             <h2 className='text-[14px] font-poppins text-spandy font-400 '>{content2}</h2>
//         </div>
//         <div className='flex items-center gap-5 justify-center'>
//             <h2>Shop Now</h2>
//                 <IoIosArrowRoundForward />
//         </div>
//       </div>
//     </>
//   )
// }

// export default CollectionCard


import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const CollectionCard = ({ content1, content2 }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 p-4 md:p-6 border-[#E5E7EB] border rounded-2xl bg-white w-full max-w-xl mx-auto mb-4">
      
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h2 className="text-[20px] md:text-[24px] font-poppins text-primary font-semibold">
          {content1}
        </h2>
        <h2 className="text-[13px] md:text-[14px] font-poppins text-spandy font-normal">
          {content2}
        </h2>
      </div>

      {/* CTA Section */}
      <div className="flex items-center gap-2 md:gap-5 justify-center text-primary cursor-pointer hover:underline">
        <h2 className="text-[14px] md:text-[16px] font-medium">Shop Now</h2>
        <IoIosArrowRoundForward className="text-xl md:text-2xl" />
      </div>
    </div>
  );
};

export default CollectionCard;