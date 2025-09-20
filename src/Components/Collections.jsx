import React from 'react'
import CommonHead from '../Tools/CommonHead'
import Slider from "react-slick";
import CollectionCard from '../Tools/CollectionCard'

function Collections() {
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
    <section className='h-[434px] py-22'>
        <div className="container">

    <div className="slider-container collection_slider">
        <div className='mb-10'>
        <CommonHead content1={"Start exploring. "} content2={"Good things are waiting for you"}/>

        </div>
      <Slider {...settings}>
        <div>
          <CollectionCard content1={"For Men's and"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Women's"} content2={"Starting at $19"}/>
        </div>
        <div>
          <CollectionCard content1={"Accessories"} content2={"Explore accessories"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting price at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>
        <div>
          <CollectionCard content1={"For Men's"} content2={"Starting at $24"}/>
        </div>

      </Slider>
    </div>
        </div>
        </section>
    </>
  );
}

export default Collections;

