import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const CollectionCard = ({content1,content2}) => {
  return (
    <>
      <div className=' h-[132px] flex items-center justify-center gap-28 mr-3 border-red-100 border-1 border-solid rounded-2xl '>
        <div>
            <h2 className='text-[24px] font-poppins text-primary font-600 '>{content1}</h2>
            <h2 className='text-[14px] font-poppins text-spandy font-400 '>{content2}</h2>
        </div>
        <div className='flex items-center gap-5 justify-center'>
            <h2>Shop Now</h2>
                <IoIosArrowRoundForward />
        </div>
      </div>
    </>
  )
}

export default CollectionCard
