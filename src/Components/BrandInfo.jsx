import React from 'react';
import Brandtool from '../tools/Brandtool';
import S1 from '../Images/serviceImage1.png';
import S2 from '../Images/serviceImage2.png';
import S3 from '../Images/serviceImage3.png';
import S4 from '../Images/serviceImage4.png';

// Functional component to display brand service highlights
const BrandInfo = () => {
  return (
    // Section wrapper with responsive padding
    <section className="py-10 px-4 md:px-8 lg:px-30">
      {/* Centered container with max width for large screens */}
      <div className="max-w-screen-xl mx-auto">
        {/* Flex container with responsive layout and spacing */}
        <div className="flex flex-col sm:flex sm:flex-row gap-4 sm:gap-6 md:gap-8 border border-brdrclr rounded-2xl p-4 md:p-6 bg-white">
          {/* Individual service item using Brandtool component */}
          <Brandtool
            content1={S1} // Image for free shipping
            content2="Free Shipping" // Title
            content3="On orders over $50.00" // Description
          />
          <Brandtool
            content1={S2} // Image for easy returns
            content2="Very easy to return"
            content3="Just phone number"
          />
          <Brandtool
            content1={S3} // Image for worldwide delivery
            content2="Worldwide delivery"
            content3="Fast delivery worldwide"
          />
          <Brandtool
            content1={S4} // Image for refund policy
            content2="Refunds policy"
            content3="60 days return for any reason"
          />
        </div>
      </div>
    </section>
  );
};

// Exporting the component for use in other parts of the app
export default BrandInfo;