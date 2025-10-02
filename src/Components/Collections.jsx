import React from 'react'
import CommonHead from '../Tools/CommonHead'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import CollectionCard from '../Tools/CollectionCard'


function Collections() {
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <section className='h-[434px] py-22'>
        <div className="container">

    <div className="slider-container collection_slider">
        <div className='mb-15'>
        <CommonHead content1={"Start exploring. "} content2={"Good things are waiting for you"}/>

        </div>
      <Slider {...settings}>

          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>

          <CollectionCard content1={"For Women's"} content2={"Starting at $19"}/>

          <CollectionCard content1={"Accessories"} content2={"Explore accessories"}/>

          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>

          <CollectionCard content1={"For Women's"} content2={"Starting price at $24"}/>

          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>


      </Slider>
    </div>
        </div>
        </section>
    </>
  );
}

export default Collections;

