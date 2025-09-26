import React from 'react'

const Productitems = ({content1,content2,content3}) => {
  return (
    <>
        <div className='flex gap-4 items-center bg-amber-50 my-1'>
        <div className='w-12 h-12 bg-amber-600'>
        <img src="" alt="Image" className='w-7 h-7 ' />{content1}
        </div>
        <div className=' '>
        <p className='font-poppins font-semibold text-[16px] truncate'>{content2}</p>
        <p className='font-poppins text-[12px] font-normal'>{content3}</p>
        </div>
        </div>
    </>
  )
}

export default Productitems
