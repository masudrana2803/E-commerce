import React from 'react'
import BannerC from '../Images/banner-container.png'
const BannerContainer = () => {
  return (
    <div>
        <section id='banner_container' className=' px-30 py-13 '>
            <img src={BannerC} alt="" />
        </section>
    </div>
  )
}

export default BannerContainer