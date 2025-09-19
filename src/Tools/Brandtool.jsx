import React from 'react'

const Brandtool = ({content1,content2,content3}) => {
  return (
    <>
        <div className=' flex items-center gap-3.25 w-[302px]'>
            <div>
                <img src={content1} alt="" />
            </div>
            <div>
                <h2>
                </h2>
                    {content2}
                <h2>
                    {content3}
                </h2>
            </div>
        </div>
    </>
  )
}

export default Brandtool
