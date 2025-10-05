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
    <>
  <div className='bg-yellow-100 w-full max-w-[400px] flex items-center justify-between mr-3 p-4 box-border'>

  {/* Text Section */}
  <div className="flex-1 min-w-0">
        <h2 className="text-[20px] md:text-[24px] font-poppins text-primary font-semibold">
          {content1}
        </h2>
        <h2 className="text-[13px] md:text-[14px] font-poppins text-spandy font-normal">
          {content2}
        </h2>
      </div>
      {/* CTA Section */}
      <div className="ml-4 flex items-center gap-2 bg-blue-50 px-3 py-2 rounded">
        <h2 className="text-sm">Shop Now</h2>
        <IoIosArrowRoundForward />
      </div>

      </div>


    </>
  );
};

export default CollectionCard;