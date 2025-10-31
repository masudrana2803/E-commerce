import React from 'react';
import logo from "../Images/Nexton_Logo.png";
import { FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-white w-full border-[#E5E7EB] border-solid border-1">
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