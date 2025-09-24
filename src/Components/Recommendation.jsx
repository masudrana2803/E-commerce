import React, { useEffect, useState } from 'react'
import CommonHead from '../Tools/CommonHead'
import Slider from 'react-slick';
import RecommendationItem from '../Tools/RecommendationItem';
import Ritems from '../Images/Product27.png'
import axios from 'axios';





const Recommendation = () => {

      const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

// Most Important parts in API integration

        const [Allproducts,setAllproducts] = useState([])

        useEffect(()=>{
          
          axios.get('https://dummyjson.com/products')
  
          .then((res)=>{setAllproducts(res.data.products)})
  
          .catch((err)=>{console.log(err)})
          
        },[])
        
        console.log(Allproducts)
// Most Important parts in API integration


  return (
    <>
    <section id='Recommendations' className='py-22'>
        <div className="container">
            <div className=' mb-8.5'>
                <CommonHead content1={"Recommendations. "} content2={"Best matching products for you"} />
            </div>

               <Slider {...settings} className='RecommendSlider'>
                
                {
                  Allproducts.map((item)=>(
                    <RecommendationItem key={item.id} productImage={item.thumbnail} Description={item.description} 
                    Category={item.category} Rating={item.rating} Review={item.stock} DiscountPrice={""} Price={item.price}

                    />
                    
                  )
                )
              }

              </Slider>
        </div>

    </section>
    </>
  )
}

export default Recommendation