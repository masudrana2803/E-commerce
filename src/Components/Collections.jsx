import React from 'react';
import CommonHead from '../Tools/CommonHead';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


import CollectionCard from '../Tools/CollectionCard';

function Collections() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
        <div className="mb-8">
          <CommonHead
            content1="Start exploring."
            content2="Good things are waiting for you"
          />
        </div>

            
            {/* <div>
              <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
            </div> */}
        <div className="collection_slider sm:w-[100%]">
          <Slider {...settings}>
            <div className="px-2 w-full">
              <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
            </div>
            <div className="px-2 w-full">
              <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
            </div>
            <div className="px-2 w-full">
              <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
            </div>
            <div className="px-2 w-full">
              <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
            </div>

          </Slider>
        </div>
    </>
  );
}

export default Collections;