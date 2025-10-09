import React from 'react'

const CommonHead = ({ content1, content2,content3,content4 }) => {
  return (
    <>
      <h2 className="font-bold text-2xl font-poppins text-primary border-0 ">
        {content1}
        <span className="font-medium text-spandy border-0"> {content2}</span>
      </h2>
      <p className='text-2ndary w-[720px] text-[16px] font-normal border-0'>{content3}</p>
      <p className='text-2ndary border-brdrclr rounded-2xl w-fit px-2' >{content4}</p>
    </>
  )
}


export default CommonHead