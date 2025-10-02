import React, { useEffect, useState } from 'react';
import CommonHead from '../Tools/CommonHead';
import Slider from 'react-slick';

import RecommendationItem from '../Tools/RecommendationItem';
import axios from 'axios';

const Recommendation = () => {


  const [Allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => setAllproducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);
          // console.log(Allproducts)

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    ],
  };

  return (
    <section id="Recommendations" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-8">
          <CommonHead
            content1="Recommendations."
            content2="Best matching products for you"
          />
        </div>

        <Slider {...settings} className="RecommendSlider">
          {Allproducts.slice(0,29).map((item) => (
            <RecommendationItem
              key={item.id}
              productImage={item.thumbnail}
              Description={item.description}
              Category={item.category}
              Rating={item.rating}
              Review={item.stock}
              DiscountPrice=""
              Price={item.price}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Recommendation;