import React from 'react'
import CommonHead from '../Tools/CommonHead'
import Slider from 'react-slick';
import RecommedationItem from '../Tools/RecommedationItem';






const Recommendation = () => {
    
      const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };



  return (
    <>
        <div className="container">
            <div className=' mb-8.5'>
                <CommonHead content1={"Recommendations. "} content2={"Best matching products for you"} />
            </div>
            <div className="RecommendSlider mb-20">
                <Slider {...settings}>
                        <div>
                            <RecommedationItem  content1={"/src/Images/Product27.png"}/>
                        </div>
                        <div>
                            <RecommedationItem/>
                        </div>
                        <div>
                            <RecommedationItem/>
                        </div>
                        <div>
                            <RecommedationItem/>
                        </div>
                        <div>
                            <RecommedationItem/>
                        </div>
                        
                </Slider>

            </div>
        </div>
    </>
  )
}

export default Recommendation