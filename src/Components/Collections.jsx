import React from 'react';
import CommonHead from '../Tools/CommonHead';
import Slider from 'react-slick';
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
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
    ],
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CommonHead
            content1="Start exploring."
            content2="Good things are waiting for you"
          />
        </div>

        <div className="collection_slider">
          <Slider {...settings}>
            {[
              { content1: "For Men's", content2: "Starting at $24" },
              { content1: "For Women's", content2: "Starting at $19" },
              { content1: "Accessories", content2: "Explore accessories" },
              { content1: "For Men's", content2: "Starting at $24" },
              { content1: "For Women's", content2: "Starting price at $24" },

            ].map((item, index) => (
              <div key={index} className="px-2">
                <CollectionCard
                  content1={item.content1}
                  content2={item.content2}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Collections;