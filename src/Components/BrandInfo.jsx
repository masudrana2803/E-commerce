import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import Brandtool from '../Tools/Brandtool';
import S1 from '../Images/serviceImage1.png'
import S2 from '../Images/serviceImage2.png'
import S3 from '../Images/serviceImage3.png'
import S4 from '../Images/serviceImage4.png'





const BrandInfo = () => {
  return (
    <>
      <section>
        <div className="container">
            <div className=' px-30 pt-13 pb-8 flex gap-2 border-1 border-solid border-red-50 rounded-2xl'>
                <Brandtool content1={S1} content2={"Free Shipping"} content3={"On orders over $50.00"} />
                <Brandtool content1={S2} content2={"Very easy to return"} content3={"Just phone number"} />
                <Brandtool content1={S3} content2={"Worldwide delivery"} content3={"Fast delivery worldwide"} />
                <Brandtool content1={S4} content2={"Refunds policy"} content3={"60 days return for any reason"} />
            </div>
        </div>
      </section>
    </>
  )
}

export default BrandInfo
