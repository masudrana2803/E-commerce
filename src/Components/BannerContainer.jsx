// import React from 'react'
// import BannerC from '../Images/banner-container.png'
// const BannerContainer = () => {
//   return (
//     <div>
//         <section id='banner_container' className=' px-30 py-13 '>
//             <img className='w-full' src={BannerC} alt="" />
//         </section>
//     </div>
//   )
// }

// export default BannerContainer

import React from 'react';
import BannerC from '../Images/banner-container.png';

const BannerContainer = () => {
  return (
    <section id="banner_container" className="py-10 px-4 md:px-8 lg:px-30">
      <div className="max-w-screen-xl mx-auto">
        <img
          src={BannerC}
          alt="Banner"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default BannerContainer;