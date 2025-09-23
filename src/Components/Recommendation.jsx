import React from 'react'
import CommonHead from '../Tools/CommonHead'
import Slider from 'react-slick';
import RecommedationItem from '../Tools/RecommedationItem';
import Ritems from '../Images/Product27.png'
import axios from 'axios';





const Recommendation = () => {

    
      const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  
        axios.get('https://dummyjson.com/products')
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})


  return (
    <>
        <div className="container">
            <div className=' mb-8.5'>
                <CommonHead content1={"Recommendations. "} content2={"Best matching products for you"} />
            </div>
            <div className="RecommendSlider mb-20">
                <Slider {...settings}>
                        <div>
                            <RecommedationItem  content1={Ritems} content2={"Description"} content3={"Category"} content4={"Counter"}
                            content5={"Review"} content6={"Discount Price"} content7={"Price"} />
                        </div>
                        

                        
                </Slider>

            </div>
        </div>
    </>
  )
}

export default Recommendation