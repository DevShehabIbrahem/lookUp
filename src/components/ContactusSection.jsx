import React from 'react'
import contactUs from "../assets/images/cintactUs.jpeg"
import arrowcontactUs from "../assets/images/SVG/icons/contactusIcon.svg"
const ContactusSection = () => {
    return (
        <div className='mt-8 md:mt-40'>
            <div className='w-full h-[700px] relative mx-auto'>
                <img src={contactUs} alt="contactUs" className='w-full h-full object-cover' />
                <div className='absolute top-0 bg-gradient-to-b from-[#06535b] to-[#06535b71] opacity-[.7] w-full h-full'></div>

                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <h3 className='text-white text-center mb-4 md:mb-6'>Contact us</h3>
                    <h3 className='text-white text-[24px] md:text-[48px] leading-10 text-center md:text-left'>
                        <span className='text-sectionTitle md:text-[48px]'>Building Dreams,</span> <br class='md:hidden' /> Creating <br class=' hidden md:flex' /> Communities
                    </h3>
                    <p className='text-white text-center  max-w-[754px] mx-auto mt-4 md:mt-7'>We are one of the remarkable entities in Egypt within the construction and investment field, with a wide scope of projects including residential, commercial, and administrative units.</p>

                    <a href='#' className='bg-white px-5 p-1 space-x-3 md:p-0 md:px-0 md:w-[150px] md:h-[38px] mt-4 md:mt-7 flex items-center justify-center mx-auto md:mx-0 cursor-pointer'>
                        <span>Contact Us</span>
                        <div className='border-l flex items-center h-full text-center border-red-500 pl-3'>
                            <img src={arrowcontactUs} alt="arrowcontactUs" />
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default ContactusSection