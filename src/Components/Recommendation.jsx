import React, { useEffect, useState } from 'react';
import CommonHead from '../Tools/CommonHead';
import Slider from 'react-slick';
import RecommendationItem from '../Tools/RecommendationItem';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Recommendation = () => {
  const [Allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setAllproducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // -----Product details handler
  const handleDetails = (ProductDetails)=>{
    // console.log(ProductDetails)
    
    navigate(`/ProductDetails/${ProductDetails}`)


  }


  return (
    <section id="Recommendations" className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CommonHead
            content1="Recommendations."
            content2="Best matching products for you"
          />
        </div>

        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading recommendations...</div>
        ) : (
          <Slider {...settings} className="RecommendSlider px-2 sm:px-4">
            {Allproducts.slice(0, 8).map((item) => (
              <RecommendationItem
                key={item.id}
                productImage={item.thumbnail}
                Description={item.description}
                Category={item.category}
                Rating={item.rating}
                Review={item.stock}
                DiscountPrice=""
                Price={item.price}
                DetailsClick={()=>handleDetails(item.id)}
              />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Recommendation;