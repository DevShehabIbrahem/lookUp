import React from 'react'
import contactUs from "../assets/images/cintactUs.jpeg"
import arrowcontactUs from "../assets/images/SVG/icons/contactusIcon.svg"
const ContactusSection = () => {
    return (
        <div className='mt-32'>
            <div className='w-full h-[700px] relative'>
                <img src={contactUs} alt="contactUs" className='w-full h-full object-cover' />
                <div className='absolute top-0 bg-gradient-to-b from-[#06535b] to-[#06535b71] opacity-[.7] w-full h-full' ></div>

                <div className='absolute inset-0 text-center top-24'>
                    <h3 className='text-white'>Contact us</h3>
                    <h3 className='text-white text-[48px] leading-10'> <span className='text-sectionTitle [48px]'>Building Dreams,</span>  Creating <br />Communities</h3>
                    <p className='w-[754px] mx-auto text-white mt-7'>We are one of the remarkable entities in Egypt within the construction and investment field, with a wide scoop of projects including residential, commercial, and administrative units.</p>

                    <a className='bg-white w-[200px] h-[38px]  mt-7 flex items-center  mx-auto text-center cursor-pointer'>
                        <span className='flex-1'>Contact Us</span>
                        <div className='border-l flex  items-center  h-full text-center border-red-500 p-3'>
                            <span>
                                <img src={arrowcontactUs} alt="arrowcontactUs" />
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default ContactusSection