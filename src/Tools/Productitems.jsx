import React from 'react'

const Productitems = ({content1,content2,content3}) => {
  return (
    <>
        <div className='flex gap-4 items-center my-1'>
        <div className='w-20 h-20 flex gap-4 bg-white rounded-[12px]'>
      <img src={content1} alt="Image" className='w-full h-full' />
        </div>
        <div className='prItems '>
        <p className='font-poppins font-semibold text-[8px] truncate w-50'>{content2}</p>
        <p className='font-poppins text-[18px] font-normal'>{content3}</p>
        </div>
        </div>
    </>
  )
}

export default Productitems
