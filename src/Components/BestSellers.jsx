import React, { useEffect, useState } from 'react';
// Reusable heading component
import CommonHead from '../tools/CommonHead';
// Slider component from react-slick for carousel functionality
import Slider from 'react-slick';
// Individual product item component
import BestSellersItem from '../tools/BestSellersItem';
// Axios for API requests
import axios from 'axios';
// Hook to programmatically navigate between routes
import { useNavigate } from 'react-router';

const BestSellers = () => {
  // State to store all fetched products
  const [Allproducts, setAllproducts] = useState([]);
  // State to manage loading indicator
  const [loading, setLoading] = useState(true);
  // Navigation hook from react-router
  const navigate = useNavigate();

  // Fetch product data on component mount
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products') // API call to fetch products
      .then((res) => {
        setAllproducts(res.data.products); // Store products in state
        setLoading(false); // Turn off loading indicator
      })
      .catch((err) => {
        console.log(err); // Log error if request fails
        setLoading(false); // Still turn off loading indicator
      });
  }, []);

  // Slider configuration for responsiveness and behavior
  const settings = {
    arrows: false, // Hide navigation arrows
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scroll
    speed: 500, // Transition speed in ms
    slidesToShow: 4, // Number of items to show at once
    slidesToScroll: 4, // Number of items to scroll at once
    responsive: [
      {
        breakpoint: 1024, // For screens < 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For screens < 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // For screens < 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Navigate to product details page with selected product ID
  const handleDetails = (ProductDetails) => {
    console.log(ProductDetails); // Log selected product ID
    navigate(`/ProductDetails/${ProductDetails}`); // Navigate to details page
  };

  return (
    <section id="BestSellerss" className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-8">
          <CommonHead
            content1="BestSellerss."
            content2="Best selling of the month"
          />
        </div>

        {/* Conditional rendering based on loading state */}
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading BestSellerss...</div>
        ) : (
          // Render slider with product items
          <Slider {...settings} className="RecommendSlider px-2 sm:px-4">
            {Allproducts.slice(0, 8).map((item) => (
              <BestSellersItem
                key={item.id} // Unique key for each item
                productImage={item.thumbnail} // Product image
                Description={item.description} // Product description
                Category={item.category} // Product category
                Rating={item.rating} // Product rating
                Review={item.stock} // Product stock as review count
                DiscountPrice="" // Placeholder for discount price
                Price={item.price} // Product price
                DetailsClick={() => handleDetails(item.id)} // Click handler for details
              />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default BestSellers;