import React from 'react';
// Importing the banner image from the local Images directory
import BannerC from '../Images/banner-container.png';

// Functional component to render the banner section
const BannerContainer = () => {
  return (
    // Section wrapper with padding and responsive horizontal spacing
    <section id="banner_container" className="py-10 px-4 md:px-8 lg:px-30">
      {/* Centered container with max width for large screens */}
      <div className="max-w-screen-xl mx-auto">
        {/* Banner image with full width, auto height, rounded corners, and object-fit cover */}
        <img
          src={BannerC} // Source of the image
          alt="Banner" // Alt text for accessibility
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

// Exporting the component for use in other parts of the app
export default BannerContainer;