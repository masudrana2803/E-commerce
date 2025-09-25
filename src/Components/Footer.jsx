// import React from 'react'
// import logo from "../Images/Nexton_Logo.png"
// import { FaFacebook } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa";
// import { AiFillTwitterCircle } from "react-icons/ai";



// const Footer = () => {
//   return (
//     <>
//     <div className="container">

//         <div className="py-10 px-25">
//             <div className='flex justify-between'>
//                 <div className='flex flex-col gap-1'>
//                     <div className='w-[119px] h-[46px] mb-5'>
//                         <img src={logo} alt="" />
//                     </div>
//                     <div className='flex content-around items-center '>
//                         <div className='w-5 h-5 '><FaFacebook/></div>
//                         <div className=''>Facebook</div>
//                     </div>
//                     <div className='flex content-around items-center '>
//                         <div className='w-5 h-5 '><FaYoutube/></div>
//                         <div className=''>Youtube</div>
//                     </div>
//                     <div className='flex content-around items-center '>
//                         <div className='w-5 h-5 '><FaTelegram/></div>
//                         <div className=''>Telegram</div>
//                     </div>
//                     <div className='flex content-around items-center '>
//                         <div className='w-5 h-5 '><AiFillTwitterCircle /></div>
//                         <div className=''>Twitter</div>
//                     </div>

//                 </div>
//                 <div className='flex-col flex gap-2 font-poppins'>
//                     <div className='font-bold my-5'>Getting Started</div>
//                     <div>Release Notes</div>
//                     <div>Upgrade Guide</div>
//                     <div>Browser Support</div>
//                     <div>Dark Mode</div>
//                 </div>
//                 <div className='flex-col flex gap-2 font-poppins'>
//                     <div className='font-bold my-5'>Explore</div>
//                     <div>Prototyping</div>
//                     <div>Design Systems</div>
//                     <div>pricing</div>
//                     <div>Security</div>
//                 </div>
//                 <div className='flex-col flex gap-2 font-poppins'>
//                     <div className='font-bold my-5'>Community</div>
//                     <div>Discussion Forums</div>
//                     <div>Code of Conduct</div>
//                     <div>Contributing</div>
//                     <div>API Reference</div>
//                 </div>

//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Footer

import React from 'react';
import logo from "../Images/Nexton_Logo.png";
import { FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-screen-xl mx-auto py-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Logo and Social Links */}
          <div className="flex flex-col gap-3">
            <div className="w-[119px] h-[46px] mb-5">
              <img src={logo} alt="Nexton Logo" className="w-full h-full object-contain" />
            </div>
            {[
              { icon: <FaFacebook />, label: "Facebook" },
              { icon: <FaYoutube />, label: "Youtube" },
              { icon: <FaTelegram />, label: "Telegram" },
              { icon: <AiFillTwitterCircle />, label: "Twitter" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 text-blue-600">{item.icon}</div>
                <div>{item.label}</div>
              </div>
            ))}
          </div>

          {/* Footer Links */}
          {[
            {
              title: "Getting Started",
              links: ["Release Notes", "Upgrade Guide", "Browser Support", "Dark Mode"],
            },
            {
              title: "Explore",
              links: ["Prototyping", "Design Systems", "Pricing", "Security"],
            },
            {
              title: "Community",
              links: ["Discussion Forums", "Code of Conduct", "Contributing", "API Reference"],
            },
          ].map((section, idx) => (
            <div key={idx} className="flex flex-col gap-2 font-poppins">
              <div className="font-bold my-2">{section.title}</div>
              {section.links.map((link, i) => (
                <div key={i}>{link}</div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Footer;