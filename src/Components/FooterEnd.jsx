import React from 'react'
import Visa from '../Images/visa.png'
import Paypal from '../Images/paypal.png'
import Stripe from '../Images/stripe.png'
import Verisign from '../Images/verisign.png'

const FooterEnd = () => {
  return (
    <>
    <section id='FooterEnd' className='py-8'>
        <div className="container">
        <div className='flex justify-between'>
            <div>
                <h2 className='text-[16px] font-poppins font-400'>Nexton eCommerce. © 2024</h2>
            </div>
            <div className='flex gap-3'>
                <div className=' active:scale-2 '>
                    <img src={Visa} alt="" />
                </div>
                <div className=' active:scale-2 '>
                    <img src={Paypal} alt="" />
                </div>
                <div className=' active:scale-2 '>
                    <img src={Stripe} alt="" />
                </div>
                <div className=' active:scale-2 '>
                    <img src={Verisign} alt="" />
                </div>

            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default FooterEnd