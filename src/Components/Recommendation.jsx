import React, { useEffect, useState } from 'react'
import CommonHead from '../Tools/CommonHead'
import Slider from 'react-slick';
import RecommendationItem from '../Tools/RecommendationItem';
import Ritems from '../Images/Product27.png'
import axios from 'axios';





const Recommendation = () => {

    

        const [Allproducts,setAllproducts] = useState([])

        useEffect(()=>{
          
          axios.get('https://dummyjson.com/products')
  
          .then((res)=>{setAllproducts(res.data.products)})
  
          .catch((err)=>{console.log(err)})
          console.log(Allproducts)
          
        },[])
  

  return (
    <>
        <div className="container">
            <div className=' mb-8.5'>
                <CommonHead content1={"Recommendations. "} content2={"Best matching products for you"} />
            </div>
              <div className='flex flex-wrap gap-4'>
                {
                  Allproducts.map((item)=>(

                    <RecommendationItem/>

                  )
                  )

                }
                  <div>
                    {/* <RecommendationItem  content1={Ritems} content2={"Description"} content3={"Category"} content4={"Counter"}
                    content5={"Review"} content6={"Discount Price"} content7={"Price"} /> */}
                  </div>
              </div>
        </div>
    </>
  )
}

export default Recommendation