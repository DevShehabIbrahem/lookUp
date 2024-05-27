import React from 'react'
import logo from "../assets/images/SVG/logoWhiteText.svg"
import tele from "../assets/images/SVG/icons/whitetele.svg"
import email from "../assets/images/SVG/icons/email.svg"
import clender from "../assets/images/SVG/icons/calender.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Footer = () => {
    return (
        <footer className='md:mt-32 text-white bg-gradient-to-b py-12 from-[#06535B] to-[#004A52]'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='flex justify-center w-[230px] h-[139px] mx-auto '>
                    <img src={logo} alt="logo" className='w-full h-full object-contain' />
                </div>
                <div className='flex justify-evenly text-[12px] md:text-inherit  flex-wrap gap-8 items-baseline w-full  mx-auto py-12'>
                    <div>
                        <div className='flex flex-col items-center gap-3'>


                            <div className='flex items-start gap-3'>
                                <span><LazyLoadImage src={tele} alt="tele" /></span>
                                <span className='uppercase'>Phone No</span>
                            </div>


                            <span className='text-[48px] leading-8'>1997</span>


                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='flex items-start gap-3'>
                                <LazyLoadImage src={email} alt="tele" />
                                <div>
                                    <span>Email Address</span>
                                    <h3>info@ucdevelop.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-start gap-3'>
                            <div className='flex gap-3 items-start'>
                                <LazyLoadImage src={email} alt="tele" />
                                <div className='flex flex-col'>
                                    <span>Address</span>
                                    <span className='text-wrap'>Building 320, 90th St. 5th Settlement, <br /> Cairo, Egypt. <a href="#" className='rounded-full bg-[#488d9944] p-1 px-3 text-[14px] outline-none'>Show Map</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-baseline gap-3'>
                            <LazyLoadImage src={clender} alt="tele" />
                            <div className='flex flex-col'>
                                <span className='text-[24px]'>All Week (off Line)</span>
                                <span>From 10 am To 6 pm </span>
                            </div>

                        </div>
                    </div>

                </div>
                <span className='text-center w-full'>Copyright © 2024 ucdevelop.  Design by Right Mind</span>
            </div>
        </footer>
    )
}

export default Footer