import React from 'react'
import hero from '../Images/hero.png'
import "slick-carousel/slick/slick.css"
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <section>


    <div className="slider-container banner_slider">
      <Slider {...settings}>
        <div>
          <h3>
            <a href="#"><img src={hero} alt="Hero_Banner" className='w-full overflow-hidden' /></a>
          </h3>
        </div>
        <div>
          <h3>
            <a href="#"><img src={hero} alt="Hero_Banner" /></a>
          </h3>
        </div>
        <div>
          <h3>
            <a href="#"><img src={hero} alt="Hero_Banner" /></a>
          </h3>
        </div>


      </Slider>
    </div>


    </section>
    </>
  )
}

export default Hero
