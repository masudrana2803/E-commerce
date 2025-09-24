import React from 'react'
import logo from "../Images/Nexton_Logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";



const Footer = () => {
  return (
    <>
    <div className="container">

        <div className="py-10 px-25">
            <div className='flex justify-between'>
                <div className='flex flex-col gap-1'>
                    <div className='w-[119px] h-[46px] mb-5'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex content-around items-center '>
                        <div className='w-5 h-5 '><FaFacebook/></div>
                        <div className=''>Facebook</div>
                    </div>
                    <div className='flex content-around items-center '>
                        <div className='w-5 h-5 '><FaYoutube/></div>
                        <div className=''>Youtube</div>
                    </div>
                    <div className='flex content-around items-center '>
                        <div className='w-5 h-5 '><FaTelegram/></div>
                        <div className=''>Telegram</div>
                    </div>
                    <div className='flex content-around items-center '>
                        <div className='w-5 h-5 '><AiFillTwitterCircle /></div>
                        <div className=''>Twitter</div>
                    </div>

                </div>
                <div className='flex-col flex gap-2 font-poppins'>
                    <div className='font-bold my-5'>Getting Started</div>
                    <div>Release Notes</div>
                    <div>Upgrade Guide</div>
                    <div>Browser Support</div>
                    <div>Dark Mode</div>
                </div>
                <div className='flex-col flex gap-2 font-poppins'>
                    <div className='font-bold my-5'>Explore</div>
                    <div>Prototyping</div>
                    <div>Design Systems</div>
                    <div>pricing</div>
                    <div>Security</div>
                </div>
                <div className='flex-col flex gap-2 font-poppins'>
                    <div className='font-bold my-5'>Community</div>
                    <div>Discussion Forums</div>
                    <div>Code of Conduct</div>
                    <div>Contributing</div>
                    <div>API Reference</div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer