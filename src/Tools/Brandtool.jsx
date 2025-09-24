// import React from 'react'

// const Brandtool = ({content1,content2,content3}) => {
//   return (
//     <>
//         <div className=' flex items-center gap-3.25 w-[302px]'>
//             <div>
//                 <img src={content1} alt="" />
//             </div>
//             <div>
//                 <h2 className='text-[18px] font-poppins font-600 ' >
//                     {content2}
//                 </h2>
//                 <h2 className=' text-[14px] font-poppins font-400 text-spandy '>
//                     {content3}
//                 </h2>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Brandtool


import React from 'react';

const Brandtool = ({ content1, content2, content3 }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-md md:max-w-lg p-2">
      
      {/* Brand Image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
        <img
          src={content1}
          alt="Brand"
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <h2 className="text-[16px] sm:text-[18px] font-poppins font-semibold text-primary">
          {content2}
        </h2>
        <h2 className="text-[13px] sm:text-[14px] font-poppins font-normal text-spandy">
          {content3}
        </h2>
      </div>
    </div>
  );
};

export default Brandtool;